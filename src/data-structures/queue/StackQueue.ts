import { Stack } from '../stack/StackImpl';
import { Queue } from './Queue';

export class StackQueue<T> implements Queue<T> {
  private enqueueStack: Stack<T> = new Stack<T>();
  private dequeueStack: Stack<T> = new Stack<T>();

  /**
   * Adds an item to the queue.
   * We always add a new item to the enqueueStack.
   * @param item The item being added to the queue.
   */
  enqueue(item: T): void {
    this.enqueueStack.push(item);
  }

  /**
   * Shifts the elements from the enqueueStack to the dequeueStack
   * In the worst case, all the elements from the enqueue stack needs to be shifted, which needs O(n) time.
   * However, after the shift, elements can be dequeued at O(1)
   * This helps in dequeuing the elements in amortized O(1) time.
   */

  private shift(): void {
    while (!this.enqueueStack.isEmpty()) {
      const enqueueStackTop = this.enqueueStack.pop();
      this.dequeueStack.push(enqueueStackTop);
    }
  }

  /**
   * Removes an item from the queue and returns it.
   *
   * @throws queue Underflow if the queue is empty.
   * @returns The item that was removed from the queue
   */
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      throw new Error('Queue Underflow');
    }
    if (this.dequeueStack.isEmpty()) {
      this.shift();
    }

    return this.dequeueStack.pop();
  }

  /**
   * Returns the item at the front of the queue.
   *
   * @returns The item at the front of the queue or null if the queue is empty.
   */
  peek(): T | null | undefined {
    if (this.isEmpty()) {
      return null;
    }
    if (this.dequeueStack.isEmpty()) {
      this.shift();
    }
    return this.dequeueStack.top();
  }

  /**
   * Checks if the queue is empty.
   *
   * @returns {boolean} Whether the queue is empty or not.
   */
  isEmpty(): boolean {
    return this.enqueueStack.isEmpty() && this.dequeueStack.isEmpty();
  }

  /**
   * Returns the length of the queue.
   *
   * @returns {number} the length of the queue
   */
  length(): number {
    return this.enqueueStack.length() + this.dequeueStack.length();
  }
}
