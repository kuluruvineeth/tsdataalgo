import { MinHeap } from '../heap';

describe('MinHeap', () => {
  let heap: MinHeap<number>;
  const elements: number[] = [
    12,
    4,
    43,
    42,
    9,
    7,
    39,
    16,
    55,
    1,
    51,
    34,
    81,
    18,
  ];

  beforeEach(() => {
    heap = new MinHeap();
    for (let element of elements) {
      heap.insert(element);
    }
  });

  it('should initialize a heap from input array', () => {
    expect(heap.isEmpty()).toEqual(false);
    heap.check();
  });

  it('should remove and return the min element in the heap', () => {
    const minValue = heap.extract();

    expect(minValue).toEqual(1);
    heap.check();
  });

  it('should insert a new element and bubble up the element to it correct index in the heap', () => {
    heap.insert(24);
    heap.check();
  });

  const extract_all = (heap: MinHeap<number>, elements: number[]) => {
    [...elements]
      .sort((a, b) => a - b)
      .forEach((element: number) => {
        expect(heap.extract()).toEqual(element);
      });
    heap.check();
    expect(heap.size()).toEqual(elements.length);
    extract_all(heap, elements);
  };

  //   it('should increase priority', () => {
  //     let heap = new PriroityQueue((a: number) => {
  //       return a;
  //     }, elements.length);
  //     elements.forEach((element: number) => {
  //       heap.insert(element);
  //     });
  //     heap.check();
  //     expect(heap.size()).toEqual(elements.length);

  //     heap.increasePriority(55, 14);
  //     heap.increasePriority(18, 16);
  //     heap.increasePriority(81, 72);
  //     heap.increasePriority(9, 0);
  //     heap.increasePriority(43, 33);

  //     heap.increasePriority(72, 100);
  //     heap.increasePriority(12, 24);
  //     heap.increasePriority(39, 40);

  //     heap.check();

  //     const newElements: number[] = [
  //       12,
  //       4,
  //       33,
  //       42,
  //       0,
  //       7,
  //       39,
  //       16,
  //       14,
  //       1,
  //       51,
  //       34,
  //       72,
  //       16,
  //     ];
  //     extract_all(heap, newElements);
  //   });
});