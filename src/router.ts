import { Rectangle, Connection, NodePoint, PointGraph, Node, Direction, m_dist } from './route-graph.js';

interface Rulers {
  verticals: number[];
  horizontals: number[];
}

function computeRulers(rectangles: Rectangle[], connection: Connection): Rulers {
  const verticals = new Set<number>();
  const horizontals = new Set<number>();
  for (const rect of rectangles) {
    verticals.add(rect.x);
    verticals.add(rect.x2);
    horizontals.add(rect.y);
    horizontals.add(rect.y2);
  }
  [connection.from, connection.to].forEach((port) => {
    const position = Math.max(0, Math.min(1, port.position));
    if (port.direction === 'E' || port.direction === 'W') {
      horizontals.add(port.rectangle.y + (position * port.rectangle.height));
    } else {
      verticals.add(port.rectangle.x + (position * port.rectangle.width));
    }
  });

  const vs = Array.from(verticals).sort((a, b) => a - b);
  const hs = Array.from(horizontals).sort((a, b) => a - b);
  for (let i = 0; i < vs.length - 1; i++) {
    const v = vs[i];
    const v2 = vs[i + 1];
    if ((v2 - v) >= 4) {
      verticals.add((v + v2) / 2);
    }
  }
  for (let i = 0; i < hs.length - 1; i++) {
    const h = hs[i];
    const h2 = hs[i + 1];
    if ((h2 - h) >= 4) {
      horizontals.add((h + h2) / 2);
    }
  }

  return {
    verticals: Array.from(verticals).sort((a, b) => a - b),
    horizontals: Array.from(horizontals).sort((a, b) => a - b),
  };
}

function computeNodePoints(rulers: Rulers, rectangles: Rectangle[], connection: Connection, enclosure: Rectangle) {
  const nodes: NodePoint[] = [];
  const set = new Set<string>();
  const addNode = (p: NodePoint) => {
    const key = `${p.x},${p.y}`;
    if (!set.has(key)) {
      nodes.push(p);
      set.add(key);
    }
  };
  let horizEnclosuresAdded = false;
  for (const v of rulers.verticals) {
    for (const h of rulers.horizontals) {
      if (!horizEnclosuresAdded) {
        addNode({ x: enclosure.x, y: h });
        addNode({ x: enclosure.x2, y: h });
      }

      const p: NodePoint = { x: v, y: h };
      const contained = rectangles.find((d) => d.contains(p));
      if (contained) {
        continue;
      }
      addNode(p);
    }
    if (!horizEnclosuresAdded) {
      horizEnclosuresAdded = true;
    }
    addNode({ x: v, y: enclosure.y });
    addNode({ x: v, y: enclosure.y2 });
  }
  // add enclosure corners
  addNode({ x: enclosure.x, y: enclosure.y });
  addNode({ x: enclosure.x2, y: enclosure.y });
  addNode({ x: enclosure.x, y: enclosure.y2 });
  addNode({ x: enclosure.x2, y: enclosure.y2 });

  let start: NodePoint | null = null;
  let end: NodePoint | null = null;

  [connection.from, connection.to].forEach((port, i) => {
    const rect = port.rectangle;
    const position = Math.max(0, Math.min(1, port.position));
    let point: NodePoint | null;
    switch (port.direction) {
      case 'E':
        point = { x: rect.x, y: rect.y + (position * rect.height) };
        break;
      case 'W':
        point = { x: rect.x2, y: rect.y + (position * rect.height) };
        break;
      case 'S':
        point = { x: rect.x + (position * rect.width), y: rect.y };
        break;
      case 'N':
        point = { x: rect.x + (position * rect.width), y: rect.y2 };
        break;
    }
    if (point) {
      addNode(point);
      if (i === 0) {
        start = point;
      } else {
        end = point;
      }
    }
  });

  return {
    points: nodes,
    connectionStart: start!,
    connectionEnd: end!,
  }
}

function createGraph(points: NodePoint[]): PointGraph {
  const activeXs: number[] = [];
  const activeYs: number[] = [];
  const activeXSet = new Set<number>();
  const activeYSet = new Set<number>();
  const graph = new PointGraph();


  for (const p of points) {
    const { x, y } = p;
    if (!activeXSet.has(x)) {
      activeXSet.add(x);
      activeXs.push(x);
    }
    if (!activeYSet.has(y)) {
      activeYSet.add(y);
      activeYs.push(y);
    }
    graph.addNode(p);
  }

  activeXs.sort((a, b) => a - b);
  activeYs.sort((a, b) => a - b);

  const inHotIndex = (p: NodePoint): boolean => graph.has(p);

  for (let i = 0; i < activeYs.length; i++) {
    for (let j = 0; j < activeXs.length; j++) {
      const b: NodePoint = { x: activeXs[j], y: activeYs[i] };

      if (!inHotIndex(b)) continue;

      if (j > 0) {
        const a = { x: activeXs[j - 1], y: activeYs[i] };
        if (inHotIndex(a)) {
          graph.connect(a, b);
        }
      }

      if (i > 0) {
        const a = { x: activeXs[j], y: activeYs[i - 1] };

        if (inHotIndex(a)) {
          graph.connect(a, b);
        }
      }

    }
  }

  return graph;
}

function estimateSegmentCount(start: NodePoint, end: NodePoint, startDir: Direction, endDir: Direction) {
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

function AStar(start: Node, end: Node, endDirection: Direction) {
  const openSet: Node[] = [start];
  const closedSet: Node[] = [];

  const bendMultiplier = m_dist(start.point, end.point);

  while (openSet.length > 0) {
    const current = openSet.sort((a, b) => a.f - b.f).shift()!;
    if (current === end) {
      return current;
    }
    closedSet.push(current);

    for (const neighbor of current.adjacentNodes.keys()) {
      // if neighbor is not passable or neighbor is in closedSet:
      // continue
      if (closedSet.indexOf(neighbor) >= 0) {
        continue;
      }

      const neighborVector = current.adjacentNodes.get(neighbor)!;
      const directionChange = current.d ? (current.d !== neighborVector.direction) : false;
      const gScore = current.g + neighborVector.length + (directionChange ? Math.pow(bendMultiplier, 2) : 0);

      // if neighbor is not in openSet or tentativeGScore < neighbor.g:
      const neighborNotInOpen = openSet.indexOf(neighbor) < 0;

      if (neighborNotInOpen || (gScore < neighbor.g)) {
        const estBendCount = estimateSegmentCount(neighbor.point, end.point, neighborVector.direction, endDirection);
        neighbor.g = gScore;
        neighbor.h = m_dist(neighbor.point, end.point) + (estBendCount * Math.pow(bendMultiplier, 2));
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.d = neighborVector.direction;
        neighbor.parent = current;
        if (neighborNotInOpen) {
          openSet.push(neighbor);
        }
      }
    }
  }
  return null;
}

function createEnclosure(rects: Rectangle[], padding: number) {
  const enclosingDims = rects.reduce((prev, curr) => {
    return {
      x: Math.min(prev.x, curr.x),
      y: Math.min(prev.y, curr.y),
      x2: Math.max(prev.x2, curr.x2),
      y2: Math.max(prev.y2, curr.y2),
    };
  }, { x: Infinity, y: Infinity, x2: -Infinity, y2: -Infinity });
  return Rectangle.fromDiagonal(enclosingDims.x, enclosingDims.y, enclosingDims.x2, enclosingDims.y2).createPadded(padding);
}

export interface RouteOptions {
  enclosurePadding: number;
  avoidOtherShapes: boolean;
}

export function route(connection: Connection, rectangles: Rectangle[], options: RouteOptions) {
  const otherRects = rectangles.filter((rect) => (rect !== connection.from.rectangle) && (rect !== connection.to.rectangle));
  const connectedRects = [connection.from.rectangle, connection.to.rectangle];

  // compute enclosure
  let enclosingRect = createEnclosure(connectedRects, options.enclosurePadding);
  if (options.avoidOtherShapes) {
    let recomputeEnclosure = false;
    for (const rect of otherRects) {
      if (enclosingRect.intersects(rect)) {
        connectedRects.push(rect);
        recomputeEnclosure = true;
      }
    }
    if (recomputeEnclosure) {
      enclosingRect = createEnclosure(connectedRects, options.enclosurePadding);
    }
  }

  // computer rules, nodes, and  create a graph from them
  const rulers = computeRulers(connectedRects, connection);
  const { points, connectionStart, connectionEnd } = computeNodePoints(rulers, connectedRects, connection, enclosingRect);
  const graph = createGraph(points);
  const startNode = graph.get(connectionStart);
  const endNode = graph.get(connectionEnd);
  let pathPointer: Node | null = null;
  if (startNode && endNode) {
    pathPointer = AStar(startNode, endNode, connection.to.direction);
  }
  return { graph, pathPointer };
}