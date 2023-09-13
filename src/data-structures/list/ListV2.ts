import Node, { AbstractNode, DummyTailNode } from '../Node';
import DoublyLinkedListV2 from './DoublyLinkedListV2';

class ListV2<T> extends DoublyLinkedListV2<T> {
  /**
   * Inserts an element at that index of the list.
   * @param {*} element
   * @returns {number} The new length of the list.
   */
  insert(value: T, index: number): number {
    const node = this._traverseNodes(index, true) as AbstractNode;
    const newNode = new Node(value);
    const prevNode = node.prev as AbstractNode;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    node.prev = newNode;
    newNode.next = node;
    return ++this._length;
  }

  /**
   * Removes the element at that index from the list.
   * @param {number} index
   * @returns {boolean} Whether the removal was successful.
   */
  remove(index: number): boolean {
    const node = this._traverseNodes(index) as AbstractNode | undefined;
    if (!node) {
      return false;
    }

    const prevNode = node.prev as AbstractNode;
    const nextNode = node.next as AbstractNode;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    node.next = null;
    node.prev = null;
    this._length--;
    return true;
  }

  /**
   * Retrieves the element at that index of the list.
   * @param {number} index
   * @returns {T} The element at the index of the list.
   */
  get(index: number): T | undefined {
    const node = this._traverseNodes(index) as Node<T> | undefined;
    if (!node) {
      return undefined;
    }

    return node.value;
  }

  /**
   * Counts the number of elements in the list that are equal to the element.
   * @param {T} value
   * @returns {number} The number of elements
   */
  count(value: T): number {
    let count = 0;
    let curr = this._dummyHead.next as Node<T>;
    for (let i = 0; i < this.length; i++) {
      if (curr.value === value) {
        count++;
      }

      curr = curr.next as Node<T>;
    }

    return count;
  }

  /**
   * Returns the node at index
   * if allowExceed:
   *  If index >= length, return dummyTail
   *  If index < -length, return firstNode
   * Else:
   *  If index >= length, return undefined
   *  If index < -length, return undefined
   */
  private _traverseNodes(
    index: number,
    allowExceed = false
  ): Node<T> | DummyTailNode | undefined {
    if (!allowExceed && (index >= this.length || index < -this.length)) {
      return undefined;
    }

    if (this.length === 0) {
      return this._dummyTail;
    }

    if (index >= 0) {
      let currentNode = this._dummyHead.next as Node<T>;
      for (let i = 0; i < index && this.length; i++) {
        currentNode = currentNode.next as Node<T>;
      }
      return currentNode;
    }

    let node = this._dummyTail.prev as Node<T>;
    for (let i = 0; i < Math.abs(index) - 1 && i < this.length - 1; i++) {
      node = node.prev as Node<T>;
    }
    return node;
  }
}

export default ListV2;
