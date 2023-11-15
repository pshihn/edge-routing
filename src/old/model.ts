export interface Point {
  x: number;
  y: number;
}

export interface Line {
  a: Point;
  b: Point;
}

export type Direction = 'N' | 'S' | 'E' | 'W';

export type PortDirection = 'left' | 'right' | 'top' | 'bottom';

export interface ShapePort {
  direction: PortDirection;
  position: number;
}

export class Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
  ports?: ShapePort[];

  static fromDiagonal(x1: number, y1: number, x2: number, y2: number): Rectangle {
    return new Rectangle(x1, y1, x2 - x1, y2 - y1);
  }

  createPadded(padding: number) {
    return Rectangle.fromDiagonal(this.x - padding, this.y - padding, this.x2 + padding, this.y2 + padding);
  }

  constructor(x: number, y: number, width: number, height: number, ports?: ShapePort[]) {
    this.x = x;
    this.y = y;
    this.width = Math.abs(width);
    this.height = Math.abs(height);
    this.ports = ports;
  }

  get x2() {
    return this.x + this.width;
  }

  get y2() {
    return this.y + this.height;
  }

  contains(p: Point): boolean {
    return p.x >= this.x && p.x <= this.x2 && p.y >= this.y && p.y <= this.y2;
  }

  intersects(other: Rectangle): boolean {
    return rectanglesIntersect(this, other);
  }
}

function rectanglesIntersect(rect1: Rectangle, rect2: Rectangle) {
  return !(rect2.x > rect1.x2 ||
    rect2.x2 < rect1.x ||
    rect2.y > rect1.y2 ||
    rect2.y2 < rect1.y);
}

export interface Rulers {
  verticals: number[];
  horizontals: number[];
}

export interface NodeVector {
  length: number;
  direction: Direction;
}

export class PointNode {
  point: Point;
  adjacentNodes = new Map<PointNode, NodeVector>();
  constructor(point: Point) {
    this.point = point;
  }
  f = 0;
  g = 0;
  h = 0;
  d?: Direction;
  parent?: PointNode;
}

export function m_dist(a: Point, b: Point) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

export function getDirection(a: Point, b: Point) {
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

export function computeSegmentCount(start: Point, end: Point, startDir: Direction, endDir: Direction) {
  if (endDir === 'E') {
    switch (startDir) {
      case 'E': {
        if (start.x >= end.x) {
          return 4;
        }
        if (start.y === end.y) {
          return 0;
        }
        return 2;
      }
      case 'N':
        if ((start.y > end.y) && (start.x < end.x)) {
          return 1;
        }
        return 3;
      case 'S':
        if ((start.y < end.y) && (start.x < end.x)) {
          return 1;
        }
        return 3;
      case 'W':
        if (start.y === end.y) {
          return 4;
        }
        return 2;
    }
  } else if (endDir === 'W') {
    switch (startDir) {
      case 'E':
        if (start.y === end.y) {
          return 4;
        }
        return 2;
      case 'N':
        if ((start.y > end.y) && (start.x > end.x)) {
          return 1;
        }
        return 3;
      case 'S':
        if ((start.y < end.y) && (start.x > end.x)) {
          return 1;
        }
        return 3;
      case 'W':
        if (start.x <= end.x) {
          return 4;
        }
        if (start.y === end.y) {
          return 0;
        }
        return 2;
    }
  } else if (endDir === 'N') {
    switch (startDir) {
      case 'E':
        if ((start.y > end.y) && (start.x < end.x)) {
          return 1;
        }
        return 3;
      case 'N':
        if (start.y >= end.y) {
          return 4;
        }
        if (start.x === end.x) {
          return 0;
        }
        return 2;
      case 'S':
        if (start.x === end.x) {
          return 4;
        }
        return 2;
      case 'W':
        if ((start.y > end.y) && (start.x > end.x)) {
          return 1;
        }
        return 3;
    }
  } else if (endDir === 'S') {
    switch (startDir) {
      case 'E':
        if ((start.y < end.y) && (start.x < end.x)) {
          return 1;
        }
        return 3;
      case 'N':
        if (start.x === end.x) {
          return 4;
        }
        return 2;
      case 'S':
        if (start.y <= end.y) {
          return 4;
        }
        if (start.x === end.x) {
          return 0;
        }
        return 2;
      case 'W':
        if ((start.y < end.y) && (start.x > end.x)) {
          return 1;
        }
        return 3;
    }
  }
  return 0;
}

export class PointGraph {
  private _nodes = new Map<number, Map<number, PointNode>>();
  private _edges: Line[] = [];

  get edges(): Line[] {
    return this._edges;
  }

  addNode(p: Point) {
    const { x, y } = p;
    if (!this._nodes.has(x)) {
      this._nodes.set(x, new Map<number, PointNode>());
    }
    const ys = this._nodes.get(x)!;
    if (!ys.has(y)) {
      ys.set(y, new PointNode(p));
    }
  }

  connect(a: Point, b: Point) {
    const nodeA = this.get(a);
    const nodeB = this.get(b);

    if (!nodeA || !nodeB) {
      throw new Error(`A point was not found`);
    }
    const d = m_dist(a, b);
    nodeA.adjacentNodes.set(nodeB, { length: d, direction: getDirection(a, b) });
    nodeB.adjacentNodes.set(nodeA, { length: d, direction: getDirection(b, a) });
    this._edges.push({ a, b });
  }

  has(p: Point): boolean {
    const { x, y } = p;
    return this._nodes.has(x) && this._nodes.get(x)!.has(y);
  }

  get(p: Point): PointNode | null {
    const { x, y } = p;
    if (!this._nodes.has(x)) {
      return null;
    }
    return this._nodes.get(x)!.get(y) || null;
  }
}