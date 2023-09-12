interface Graph<T> {
  [key: string]: Array<T>;
}

function BreadthFirstSearch<T>(graph: Graph<T>, source: T): Array<T> {
  if (Object.keys(graph).length === 0) {
    return [];
  }

  return [];
}
