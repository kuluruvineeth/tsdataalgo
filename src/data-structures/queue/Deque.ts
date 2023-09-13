import DoublyLinkedListV2 from '../list/DoublyLinkedListV2';

class Deque<T> extends DoublyLinkedListV2<T> {
  /**
   * Adds an element to the back of the Deque.
   * @param {*} element The element to be queued to the back of the Deque.
   */
  enqueue(element: T): void {
    this.push(element);
  }

  /**
   * Adds an element to the front of the Deque.
   * @param {*} element The element to be queued to the front of the Deque.
   */
  enqueueFront(element: T): void {
    this.unshift(element);
  }

  /**
   * Removes the element at the front of the Deque.
   * @returns {*} The element at the front of the Deque.
   */
  dequeue(): T | undefined {
    return this.shift();
  }

  /**
   * Removes the element at the back of the Deque.
   * @returns {*} The element at the back of the Deque.
   */
  dequeueBack(): T | undefined {
    return this.pop();
  }
}

export default Deque;
