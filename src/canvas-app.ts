import { Component, ce, html, TemplateResult, css, query, state } from '@hivepoint/navu-common-ui/lib/component.js';
import { Connection, Direction, Rectangle } from './route-graph';
import { NvSelect } from '@hivepoint/navu-common-ui/lib/components/select.js';
import { NvCheckbox } from '@hivepoint/navu-common-ui/lib/components/checkbox.js';
import { NvSlider } from '@hivepoint/navu-common-ui/lib/components/slider.js';
import { route } from './router';

import '@hivepoint/navu-common-ui/lib/components/select.js';
import '@hivepoint/navu-common-ui/lib/components/checkbox.js';
import '@hivepoint/navu-common-ui/lib/components/button.js';
import '@hivepoint/navu-common-ui/lib/components/slider.js';


interface DragContext {
  x: number;
  y: number;
}

@ce('canvas-app')
export class CanvasApp extends Component {
  @query('canvas') private canvas!: HTMLCanvasElement;
  @query('#connectionFrom') private connectionFrom!: NvSelect;
  @query('#connectionTo') private connectionTo!: NvSelect;
  @query('#chkShowGraph') private chkShowGraph!: NvCheckbox;
  @query('#chkAvoid') private chkAvoid!: NvCheckbox;
  @query('#paddingSlider') private paddingSlider!: NvSlider;
  @query('#startOffsetSlider') private startOffsetSlider!: NvSlider;
  @query('#endOffsetSlider') private endOffsetSlider!: NvSlider;

  @state() private _enclosurePadding = 10;
  @state() private _startOffset = 50;
  @state() private _endOffset = 50;

  private _rectangles: Rectangle[] = [];
  private _activeRectangle: Rectangle | null = null;
  private _dragContext?: DragContext
  private _drawGraph = false;
  private _avoidCollisions = false;
  private _from: Direction = 'W';
  private _to: Direction = 'E';

  static styles = [
    Component.styles,
    css`
    :host {
      display: block;
      position: relative;
    }
    canvas {
      display: block;
    }
    #overlay {
      position: absolute;
      gap: 12px;
      top: 0;
      right: 0;
      padding: 16px 24px;
      box-shadow: 0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12);
      background: #fafafa;
      border-radius: 4px;
    }
    nv-select {
      width: 115px;
    }
    label {
      color: #666;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
      display: block;
    }
    nv-checkbox {
      letter-spacing: 0.5px;
    }
    nv-slider {
      width: 100%;
      min-width: 10px;
      margin-top: -12px;
    }
    `
  ];

  render(): TemplateResult {
    return html`
    <canvas
      @mousedown="${this._handleMouseDown}"
      @mouseup="${this._handleMouseUp}"
      @mousemove="${this._handleMouseMove}"></canvas>
    <div id="overlay" class="vert" @change="${this._onSettingsChange}">
      <div>
        <label>Connection</label>
        <div class="horiz center" style="gap: 10px;">
          <nv-select id="connectionFrom" value="W" label="From">
            <option value="E">Left</option>
            <option value="W">Right</option>
            <option value="N">Bottom</option>
            <option value="S">Top</option>
          </nv-select>
          <span>⇒</span>
          <nv-select id="connectionTo" value="E" label="To">
            <option value="E">Left</option>
            <option value="W">Right</option>
            <option value="N">Bottom</option>
            <option value="S">Top</option>
          </nv-select>
        </div>
      </div>
      <div>
        <nv-checkbox id="chkShowGraph" label="Draw Graph"></nv-checkbox>
      </div>
      <div>
        <nv-checkbox id="chkAvoid" label="Avoid shape collisions"></nv-checkbox>
      </div>
      <div style="margin-top: 8px;">
        <label>Shape Padding: <span>${this._enclosurePadding}</span></label>
        <div>
          <nv-slider id="paddingSlider" min="0" max="100" step="1" value="10" @input="${this._onSettingsChange}"></nv-slider>
        </div>
      </div>
      <div style="margin-top: 8px;">
        <label>Path Start Edge Offset: <span>${Math.round(this._startOffset)}%</span></label>
        <div>
          <nv-slider id="startOffsetSlider" min="0" max="100" step="1" value="50" @input="${this._onSettingsChange}"></nv-slider>
        </div>
      </div>
      <div style="margin-top: 8px;">
        <label>Path End Edge Offset: <span>${Math.round(this._endOffset)}%</span></label>
        <div>
          <nv-slider id="endOffsetSlider" min="0" max="100" step="1" value="50" @input="${this._onSettingsChange}"></nv-slider>
        </div>
      </div>
      <div>
        <nv-button rounded @click="${this._addRandomShape}">Add random shape</nv-button>
      </div>
      <div>
        <nv-button rounded @click="${this._resetShapes}">Reset shapes</nv-button>
      </div>
    </div>
    `;
  }

  private _resizeCanvas = () => {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  };

  firstUpdated() {
    window.addEventListener('resize', this._resizeCanvas);
    window.addEventListener('mouseup', (e: Event) => this._handleMouseUp(e));
    this._resizeCanvas();
    this._resetShapes();
  }

  private _resetShapes() {
    this._rectangles = [];
    this._addRectangle(150, 150, 100, 100, 'blue');
    this._addRectangle(700, 400, 100, 200, 'blue');
    this._draw();
  }

  private _addRandomShape() {
    const x = Math.floor(Math.random() * (this.canvas.width - 100));
    const y = Math.floor(Math.random() * (this.canvas.height - 100));
    const width = Math.floor(Math.random() * 100) + 50;
    const height = Math.floor(Math.random() * 100) + 50;
    this._addRectangle(x, y, width, height, 'orange');
    this._draw();
  }

  private _addRectangle(x: number, y: number, width: number, height: number, color: string) {
    this._rectangles.push(new Rectangle(x, y, width, height, color));
  }

  private _getRectangleAtPosition(x: number, y: number) {
    for (let i = this._rectangles.length - 1; i >= 0; i--) {
      const rect = this._rectangles[i];
      if (x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height) {
        return rect;
      }
    }
    return null;
  }

  private _handleMouseDown(e: MouseEvent) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    this._activeRectangle = this._getRectangleAtPosition(mouseX, mouseY);
    if (this._activeRectangle) {
      this._dragContext = {
        x: mouseX - this._activeRectangle.x,
        y: mouseY - this._activeRectangle.y
      }
    } else {
      this._dragContext = undefined;
    }
  }

  private _handleMouseUp(e: Event) {
    e.stopPropagation();
    this._activeRectangle = null;
    this._dragContext = undefined;
  }

  private _handleMouseMove(e: MouseEvent) {
    if (this._dragContext && this._activeRectangle) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      this._activeRectangle.x = mouseX - this._dragContext.x;
      this._activeRectangle.y = mouseY - this._dragContext.y;
      this._draw();
    }
  }

  private _draw() {
    const ctx = this.canvas.getContext('2d')!;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // create connection
    const connection: Connection = {
      from: {
        rectangle: this._rectangles[0],
        position: Math.max(1, Math.min(99, this._startOffset)) / 100,
        direction: this._from
      },
      to: {
        rectangle: this._rectangles[1],
        position: Math.max(1, Math.min(99, this._endOffset)) / 100,
        direction: this._to
      }
    };

    const { graph, pathPointer } = route(connection, this._rectangles, {
      avoidOtherShapes: this._avoidCollisions,
      enclosurePadding: this._enclosurePadding * 2,
      shapePadding: this._enclosurePadding
    });

    if (this._drawGraph) {
      ctx.save();
      ctx.strokeStyle = 'rgba(200, 200, 200, 1)';
      ctx.lineWidth = 1;
      for (const edge of graph.edges) {
        ctx.beginPath();
        ctx.moveTo(edge.from.x, edge.from.y);
        ctx.lineTo(edge.to.x, edge.to.y);
        ctx.stroke();
      }
    }

    // draw rectangles
    ctx.save();
    for (let i = this._rectangles.length - 1; i >= 0; i--) {
      const rect = this._rectangles[i];
      ctx.fillStyle = rect.color || '#000';
      ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    }
    ctx.restore();

    // Draw connection
    let current = pathPointer;
    if (current) {
      // draw segment
      ctx.save();
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 5;
      ctx.beginPath();
      let cp = current.point.shadow || current.point;
      ctx.moveTo(cp.x, cp.y);
      while (current.parent) {
        current = current.parent;
        cp = current.point.shadow || current.point;
        ctx.lineTo(cp.x, cp.y);
      }
      ctx.stroke();
    }
  }

  private _onSettingsChange() {
    this._avoidCollisions = this.chkAvoid.checked;
    this._drawGraph = this.chkShowGraph.checked;
    this._from = this.connectionFrom.value as Direction;
    this._to = this.connectionTo.value as Direction;
    this._enclosurePadding = (this.paddingSlider as any)._currentValue;
    this._startOffset = (this.startOffsetSlider as any)._currentValue;
    this._endOffset = (this.endOffsetSlider as any)._currentValue;
    this._draw();
  }
}