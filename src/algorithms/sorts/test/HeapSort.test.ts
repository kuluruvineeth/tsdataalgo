import HeapSort from '../HeapSort';
import sortingInputs from '../../../utils/test/SortingInputs.test';

describe('heapSort', () => {
  sortingInputs({ algorithm: HeapSort, test, expect });
});
