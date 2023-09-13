import QueueV2 from '../../data-structures/queue/QueueV2';
import NullThrows from '../../utils/NullThrows';

interface Graph<T> {
  [key: string]: Array<T>;
}

/**
 * Performs a breadth first search on a graph given a starting node.
 *
 * @param {object} graph Node to array of neighboring nodes.
 * @param {number|string} source Source node to start tarversal from.
 * It has to exist as a node in the graph.
 * @returns {Array<T>} A BFS traversed order of nodes.
 */
function BreadthFirstSearch<T>(graph: Graph<T>, source: T): Array<T> {
  if (Object.keys(graph).length === 0) {
    return [];
  }

  const queue = new QueueV2<T>();
  queue.enqueue(source);

  const visisted = new Set<T>([source]);

  while (!queue.isEmpty()) {
    const node = NullThrows(queue.dequeue());
    visisted.add(node!);
    graph[String(node)].forEach((neighbor: T) => {
      if (visisted.has(neighbor)) {
        return;
      }
      queue.enqueue(neighbor);
    });
  }
  return Array.from(visisted);
}

export default BreadthFirstSearch;
