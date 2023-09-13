import StackV2 from '../../data-structures/stack/StackV2';
import NullThrows from '../../utils/NullThrows';

interface Graph<T> {
  [key: string]: Array<T>;
}

/**
 * Performs a depth first search on a graph given a starting node.
 * @param  {object} graph Node to array of neighboring nodes.
 * @param {T} source Source node to start traversal from.
 * It has to exist as a node in the graph.
 * @returns {Array<T>} A DFS traversed order of nodes.
 */
function DepthFirstSearch<T>(graph: Graph<T>, source: T): Array<T> {
  if (Object.keys(graph).length === 0) {
    return [];
  }

  const stack = new StackV2<T>();
  stack.push(source);
  const visited = new Set<T>([source]);

  while (!stack.isEmpty()) {
    const node = NullThrows(stack.pop());
    visited.add(node!);

    const neighbors = graph[String(node)];
    for (let i = neighbors.length - 1; i >= 0; i--) {
      const neighbor = neighbors[i];
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }

  return Array.from(visited);
}

export default DepthFirstSearch;
