export interface NodePoint {
  x: number;
  y: number;
}

export interface Line {
  from: NodePoint;
  to: NodePoint;
}

export type Direction = 'N' | 'S' | 'E' | 'W';

export interface NodeVector {
  length: number;
  direction: Direction;
}

export class Node {
  point: NodePoint;
  adjacentNodes = new Map<Node, NodeVector>();
  constructor(point: NodePoint) {
    this.point = point;
  }

  f = 0;
  g = 0;
  h = 0;
  d?: Direction;
  parent?: Node;
}

export function m_dist(a: NodePoint, b: NodePoint) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function getDirection(a: NodePoint, b: NodePoint) {
  if (a.x === b.x) {
    if (a.y < b.y) {
      return 'S';
    } else {
      return 'N';
    }
  } else {
    if (a.x < b.x) {
      return 'E';
    } else {
      return 'W';
    }
  }
}

export class PointGraph {
  private _nodes = new Map<number, Map<number, Node>>();
  private _edges: Line[] = [];

  get edges(): Line[] {
    return this._edges;
  }

  addNode(p: NodePoint) {
    const { x, y } = p;
    if (!this._nodes.has(x)) {
      this._nodes.set(x, new Map<number, Node>());
    }
    const ys = this._nodes.get(x)!;
    if (!ys.has(y)) {
      ys.set(y, new Node(p));
    }
  }

  connect(a: NodePoint, b: NodePoint) {
    const nodeA = this.get(a);
    const nodeB = this.get(b);

    if (!nodeA || !nodeB) {
      throw new Error(`A point was not found`);
    }
    const d = m_dist(a, b);
    nodeA.adjacentNodes.set(nodeB, { length: d, direction: getDirection(a, b) });
    nodeB.adjacentNodes.set(nodeA, { length: d, direction: getDirection(b, a) });
    this._edges.push({ from: a, to: b });
  }

  has(p: NodePoint): boolean {
    const { x, y } = p;
    return this._nodes.has(x) && this._nodes.get(x)!.has(y);
  }

  get(p: NodePoint): Node | null {
    const { x, y } = p;
    if (!this._nodes.has(x)) {
      return null;
    }
    return this._nodes.get(x)!.get(y) || null;
  }
}

export class Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
  color?: string;

  static fromDiagonal(x1: number, y1: number, x2: number, y2: number): Rectangle {
    return new Rectangle(x1, y1, x2 - x1, y2 - y1);
  }

  createPadded(padding: number) {
    return Rectangle.fromDiagonal(this.x - padding, this.y - padding, this.x2 + padding, this.y2 + padding);
  }

  constructor(x: number, y: number, width: number, height: number, color?: string) {
    this.x = x;
    this.y = y;
    this.width = Math.abs(width);
    this.height = Math.abs(height);
    this.color = color;
  }

  get x2() {
    return this.x + this.width;
  }

  get y2() {
    return this.y + this.height;
  }

  contains(p: NodePoint): boolean {
    return p.x >= this.x && p.x <= this.x2 && p.y >= this.y && p.y <= this.y2;
  }

  intersects(other: Rectangle): boolean {
    return !(other.x > this.x2 ||
      other.x2 < this.x ||
      other.y > this.y2 ||
      other.y2 < this.y);
  }
}

export interface ConnectionPort {
  rectangle: Rectangle;
  direction: Direction;
  position: number;
}

export class Connection {
  from: ConnectionPort;
  to: ConnectionPort;
  constructor(from: ConnectionPort, to: ConnectionPort) {
    this.from = from;
    this.to = to;
  }
}