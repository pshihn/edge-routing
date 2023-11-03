import { Rectangle } from './model';

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

  addRectangle(x: number, y: number, width: number, height: number) {
    const color = 'blue';
    this._rectangles.push({ x, y, width, height, color });
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

  private _draw() {
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

    // draw rectangles
    this._rectangles.forEach((rect) => {
      this._ctx.fillStyle = rect.color;
      this._ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    });
  }
}