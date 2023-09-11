/**
 * Selection sort algorithm is simple and easy.
 * In selection sort the smallest value is selected from the unsorted part and placed at the beginning.
 * This algorithm is not suitable for large data sets as its
 * average and worst case time complexity is quite high.
 *
 * Time complexity
 *      Best case   -   O(n^2)
 *                      The best case occurs when an array is already sorted.
 *      Worst case  -   O(n^2)
 *                      The worst case occurs when an array is reverse sorted.
 *      Average case -  O(n^2)
 *                      The average case occurs when an array is reverse sorted.
 *
 * @param {number[]} items - The input array
 * @returns
 */

export const SelectionSort = (items: number[]) => {
  for (let i = 0; i < items.length; i++) {
    let min = i;
    for (let j = i + 1; j < items.length; j++) {
      if (items[j] < items[min]) {
        min = j;
      }
    }
    if (i !== min) {
      [items[i], items[min]] = [items[min], items[i]];
    }
  }

  return items;
};
