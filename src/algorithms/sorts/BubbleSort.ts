/**
 * Bubble sort algorithm is simple and easy. In bubble sort every pair
 * of adjacent value is compared and swap if the first value is greater than the second one.
 * By this with every iteration the greatest value goes to the right side
 * making it ascending order. This algorithm is not suitable
 * for large data sets as its average and worst time complexity is quite high
 *
 * Time Complexity
 * - Best Case - O(n^2)
 *              The best case occurs when an array is already sorted.
 * - Worst Case - O(n^2)
 *              The worst case occurs when an array is reverse sorted.
 * - Average Case - O(n^2)
 *                  The average case occurs when an array is reverse sorted.
 * @param arr
 * @returns
 */

export const BubbleSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp: number = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
