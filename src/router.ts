import { Point, PointGraph, PointNode, Rectangle, Rulers, m_dist } from './model';

export function computeRulers(rectangles: Rectangle[], includeMidPoints: boolean): Rulers {
  const verticals = new Set<number>();
  const horizontals = new Set<number>();
  for (const rect of rectangles) {
    verticals.add(rect.x);
    verticals.add(rect.x2);
    horizontals.add(rect.y);
    horizontals.add(rect.y2);
    if (rect.ports && rect.ports.length) {
      for (const port of rect.ports) {
        const position = Math.max(0, Math.min(1, port.position));
        if (port.direction === 'left' || port.direction === 'right') {
          horizontals.add(rect.y + (position * rect.height));
        } else {
          verticals.add(rect.x + (position * rect.width));
        }
      }
    }
  }
  if (includeMidPoints) {
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
  }
  return {
    verticals: Array.from(verticals).sort((a, b) => a - b),
    horizontals: Array.from(horizontals).sort((a, b) => a - b),
  };
}

export function computeNodes(rulers: Rulers, rectangles: Rectangle[], enclosure: Rectangle) {
  const nodes: Point[] = [];
  const set = new Set<string>();
  const addNode = (p: Point) => {
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

      const p: Point = { x: v, y: h };
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
  // add encloser corners
  addNode({ x: enclosure.x, y: enclosure.y });
  addNode({ x: enclosure.x2, y: enclosure.y });
  addNode({ x: enclosure.x, y: enclosure.y2 });
  addNode({ x: enclosure.x2, y: enclosure.y2 });


  for (const rect of rectangles) {
    if (rect.ports && rect.ports.length) {
      for (const port of rect.ports) {
        switch (port.direction) {
          case 'left':
            addNode({ x: rect.x, y: rect.y + (port.position * rect.height) });
            break;
          case 'right':
            addNode({ x: rect.x2, y: rect.y + (port.position * rect.height) });
            break;
          case 'top':
            addNode({ x: rect.x + (port.position * rect.width), y: rect.y });
            break;
          case 'bottom':
            addNode({ x: rect.x + (port.position * rect.width), y: rect.y2 });
            break;
        }
      }
    }
  }
  return nodes;
}

export function createGraph(points: Point[]): PointGraph {
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

  const inHotIndex = (p: Point): boolean => graph.has(p);

  for (let i = 0; i < activeYs.length; i++) {
    for (let j = 0; j < activeXs.length; j++) {
      const b: Point = { x: activeXs[j], y: activeYs[i] };

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

export function AStar(start: PointNode, end: PointNode) {
  const openSet: PointNode[] = [start];
  const closedSet: PointNode[] = [];

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
      const gScore = current.g + neighborVector.length;

      // if neighbor is not in openSet or tentativeGScore < neighbor.g:
      const neighborNotInOpen = openSet.indexOf(neighbor) < 0;

      if (neighborNotInOpen || (gScore < neighbor.g)) {
        neighbor.g = gScore;
        neighbor.h = m_dist(neighbor.point, end.point);
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.parent = current;
        if (neighborNotInOpen) {
          openSet.push(neighbor);
        }
      }
    }
  }
  return null;
}