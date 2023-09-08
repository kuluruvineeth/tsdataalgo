import { StackInterface } from './Stack';

/**
 * Stack data structure. Its work is based on the LIFO method (Last In First OUT)
 * It means that elements added to the stack are place on the top and only the
 * last element (from the top) can be reached. After we get access to the last
 * element, it pops from the stack
 * This is a class-based implementation of a Stack.
 */
export class Stack<T> implements StackInterface<T> {
  private stack: T[] = [];
  private limit: number;

  /**
   * constructor of the stack, can set a limit, if not provided there is no limit to the stack.
   *
   * @param limit The limit of the stack
   */

  constructor(limit: number = Number.MAX_VALUE) {
    this.limit = limit;
  }

  /**
   * adds a new element to the stack
   * @param {T} value The new value to add
   */

  push(value: T): void {
    if (this.length() + 1 > this.limit) {
      throw new Error('Stack Overflow');
    }

    this.stack.push(value);
  }

  /**
   * removes an element from the top
   * @throws will throw an error if the stack is empty
   * @returns {T} removed element
   */
  pop(): T {
    if (this.length() !== 0) {
      return this.stack.pop() as T;
    }
    throw new Error('Stack Underflow');
  }

  /**
   * number of elements in the stack
   * @returns {number} the number of elements in the stack
   */
  length(): number {
    return this.stack.length;
  }

  /**
   * check if the stack is empty
   * @returns {boolean} returns true if the stack is empty, otherwise false
   */
  isEmpty(): boolean {
    return this.length() === 0;
  }

  /**
   * return the last element in the stack without removing it.
   * @returns {T | null} return the last element or null if the stack is empty
   */
  top(): T | null {
    if (this.length() !== 0) {
      return this.stack[this.length() - 1];
    }
    return null;
  }
}
