import DijkstraAlgorithm from '../DijkstraAlgorithm';

describe('dijkstra', () => {
  test('empty graph', () => {
    expect(DijkstraAlgorithm({}, 'A', 'B')).toEqual([]);
  });

  test('graphs with one node', () => {
    const s = DijkstraAlgorithm({ A: {} }, 'A', 'A');

    expect(s).toEqual(['A']);
  });

  test('graphs with two nodes', () => {
    expect(DijkstraAlgorithm({ A: { B: 1 }, B: {} }, 'A', 'B')).toEqual([
      'A',
      'B',
    ]);
    expect(DijkstraAlgorithm({ A: { B: 10 }, B: {} }, 'A', 'B')).toEqual([
      'A',
      'B',
    ]);
  });

  test('bidirectional graph with multiple nodes', () => {
    const graph = {
      A: { B: 2, H: 6 },
      B: { A: 2, C: 7 },
      C: { I: 1, D: 1, B: 7, F: 10 },
      D: { F: 2, C: 1, E: 3 },
      E: { D: 2, F: 5 },
      F: { D: 2, G: 2, E: 5, C: 10 },
      G: { F: 2, I: 4, H: 3 },
      H: { A: 6, I: 8, G: 3 },
      I: { H: 8, G: 4, C: 1 },
    };

    expect(DijkstraAlgorithm(graph, 'A', 'B')).toEqual(['A', 'B']);
    expect(DijkstraAlgorithm(graph, 'B', 'G')).toEqual(['B', 'A', 'H', 'G']);
    expect(DijkstraAlgorithm(graph, 'C', 'I')).toEqual(['C', 'I']);
    expect(DijkstraAlgorithm(graph, 'A', 'E')).toEqual([
      'A',
      'H',
      'G',
      'F',
      'E',
    ]);
    expect(DijkstraAlgorithm(graph, 'F', 'B')).toEqual(['F', 'C', 'B']);
  });

  test('unidirectional graph  with multiple nodes', () => {
    const graph = {
      A: { B: 8, F: 2 },
      B: { D: 1, E: 4 },
      C: { A: 3, D: 4 },
      D: { E: 8, F: 3 },
      E: { C: 6 },
      F: { E: 7, G: 1 },
      G: {},
    };

    expect(DijkstraAlgorithm(graph, 'A', 'C')).toEqual(['A', 'F', 'E', 'C']);
    expect(DijkstraAlgorithm(graph, 'D', 'B')).toEqual([
      'D',
      'E',
      'C',
      'A',
      'B',
    ]);
    expect(DijkstraAlgorithm(graph, 'E', 'G')).toEqual([
      'E',
      'C',
      'A',
      'F',
      'G',
    ]);
  });

  test('no solution', () => {
    const graph = {
      A: { B: 8, F: 2 },
      B: { D: 1, E: 4 },
      C: { A: 3, D: 4 },
      D: { E: 8, F: 3 },
      E: { C: 6 },
      F: { E: 7, G: 1 },
      G: {},
    };

    expect(DijkstraAlgorithm(graph, 'G', 'A')).toEqual([]);
  });
});
