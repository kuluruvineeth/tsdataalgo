/**
 * Simple sorting algorithm for a small number of elements. It compares the
 * key element with the previous elements. If the previous elements are greater than the key element
 * then you move the pewvious element to the next position.
 *
 * @param {number[]} arr - The input array.
 * @returns {number[]} - The sorted array
 */

export const InsertionSort = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
};
