import { Direction, PointNode, Rectangle, ShapePort } from './model';
import { AStar, computeNodes, computeRulers, createGraph } from './router-old';

interface DragContext {
  x: number;
  y: number;
}

export class DemoCanvas {
  private _canvas: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D;
  private _rectangles: Rectangle[] = [];
  private _activeRectangle: Rectangle | null = null;
  private _dragContext?: DragContext

  constructor(canvas: HTMLCanvasElement) {
    this._canvas = canvas;
    this._ctx = canvas.getContext('2d')!;
    canvas.addEventListener('mousedown', this.handleMouseDown);
    window.addEventListener('mouseup', this.handleMouseUp);
    canvas.addEventListener('mousemove', this.handleMouseMove);
  }

  addRectangle(x: number, y: number, width: number, height: number, ports?: ShapePort[]) {
    this._rectangles.push(new Rectangle(x, y, width, height, ports));
    this._draw();
  }

  getRectangleAtPosition(x: number, y: number) {
    for (let i = this._rectangles.length - 1; i >= 0; i--) {
      const rect = this._rectangles[i];
      if (x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height) {
        return rect;
      }
    }
    return null;
  }

  handleMouseDown = (e: MouseEvent) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    this._activeRectangle = this.getRectangleAtPosition(mouseX, mouseY);
    if (this._activeRectangle) {
      this._dragContext = {
        x: mouseX - this._activeRectangle.x,
        y: mouseY - this._activeRectangle.y
      }
    } else {
      this._dragContext = undefined;
    }
  }

  handleMouseUp = () => {
    this._activeRectangle = null;
    this._dragContext = undefined;
  }

  handleMouseMove = (e: MouseEvent) => {
    if (this._dragContext && this._activeRectangle) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      this._activeRectangle.x = mouseX - this._dragContext.x;
      this._activeRectangle.y = mouseY - this._dragContext.y;
      this._draw();
    }
  }

  private _createEnclosure(rects: Rectangle[]) {
    const enclosingDims = rects.reduce((prev, curr) => {
      return {
        x: Math.min(prev.x, curr.x),
        y: Math.min(prev.y, curr.y),
        x2: Math.max(prev.x2, curr.x2),
        y2: Math.max(prev.y2, curr.y2),
      };
    }, { x: Infinity, y: Infinity, x2: -Infinity, y2: -Infinity });
    return Rectangle.fromDiagonal(enclosingDims.x, enclosingDims.y, enclosingDims.x2, enclosingDims.y2).createPadded(50);
  }

  private _draw() {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

    // find enclosing rectangle
    const connectedRects = this._rectangles.filter((rect) => rect.ports?.length);
    let enclosingRect = this._createEnclosure(connectedRects);
    let recomputeEnclosure = false;
    for (const rect of this._rectangles) {
      if (rect.ports?.length) {
        continue;
      }
      if (enclosingRect.intersects(rect)) {
        connectedRects.push(rect);
        recomputeEnclosure = true;
      }
    }
    if (recomputeEnclosure) {
      enclosingRect = this._createEnclosure(connectedRects);
    }


    // draw rulers
    const rulers = computeRulers(connectedRects, true);

    // draw rectangles
    this._ctx.save();
    this._ctx.fillStyle = 'blue';
    this._rectangles.forEach((rect) => {
      this._ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    });
    this._ctx.restore();

    // create graph
    const nodes = computeNodes(rulers, connectedRects, enclosingRect);
    const graph = createGraph(nodes);

    // draw connections
    this._ctx.save();
    this._ctx.strokeStyle = 'rgba(200, 200, 200, 1)';
    this._ctx.lineWidth = 1;
    for (const edge of graph.edges) {
      this._ctx.beginPath();
      this._ctx.moveTo(edge.a.x, edge.a.y);
      this._ctx.lineTo(edge.b.x, edge.b.y);
      this._ctx.stroke();
    }

    // Draw nodes
    // this._ctx.save();
    // this._ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    // for (const node of nodes) {
    //   this._ctx.beginPath();
    //   this._ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
    //   this._ctx.fill();
    // }
    // this._ctx.restore();

    let startNode: PointNode | null = null;
    let endNode: PointNode | null = null;
    let endDirection: Direction | null = null;
    for (const rect of connectedRects) {
      if (rect.ports?.[0]) {
        const port = rect.ports[0];
        if (startNode) {
          switch (port.direction) {
            case 'left':
              endNode = graph.get({ x: rect.x, y: rect.y + (port.position * rect.height) });
              endDirection = 'E';
              break;
            case 'right':
              endNode = graph.get({ x: rect.x2, y: rect.y + (port.position * rect.height) });
              endDirection = 'W';
              break;
            case 'top':
              endNode = graph.get({ x: rect.x + (port.position * rect.width), y: rect.y });
              endDirection = 'S';
              break;
            case 'bottom':
              endNode = graph.get({ x: rect.x + (port.position * rect.width), y: rect.y2 });
              endDirection = 'N';
              break;
          }
        } else {
          switch (port.direction) {
            case 'left':
              startNode = graph.get({ x: rect.x, y: rect.y + (port.position * rect.height) });
              break;
            case 'right':
              startNode = graph.get({ x: rect.x2, y: rect.y + (port.position * rect.height) });
              break;
            case 'top':
              startNode = graph.get({ x: rect.x + (port.position * rect.width), y: rect.y });
              break;
            case 'bottom':
              startNode = graph.get({ x: rect.x + (port.position * rect.width), y: rect.y2 });
              break;
          }
        }
        if (endNode) {
          break;
        }
      }
    }

    if (startNode && endNode) {
      let current = AStar(startNode, endNode, endDirection || 'E');
      if (current) {
        // draw segment
        this._ctx.save();
        this._ctx.strokeStyle = 'orange';
        this._ctx.lineWidth = 5;
        this._ctx.beginPath();
        this._ctx.moveTo(current.point.x, current.point.y);
        while (current.parent) {
          current = current.parent;
          this._ctx.lineTo(current.point.x, current.point.y);
        }
        this._ctx.stroke();
      } else {
        console.log('no path found');
      }
    }
  }
}