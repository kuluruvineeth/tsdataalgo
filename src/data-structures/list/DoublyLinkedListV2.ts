import Node, { AbstractNode, DummyHeadNode, DummyTailNode } from '../Node';

class DoublyLinkedListV2<T> {
  protected _dummyHead: DummyHeadNode;

  protected _dummyTail: DummyTailNode;

  protected _length: number;

  constructor() {
    this._dummyHead = new DummyHeadNode();
    this._dummyTail = new DummyTailNode();
    this._dummyHead.next = this._dummyTail;
    this._dummyTail.prev = this._dummyHead;
    this._length = 0;
  }

  /**
   * Adds an element to the end of the DoublyLinkedList
   * @param {T} element
   * @returns {number} The new length of the DoublyLinkedList
   */
  push(element: T): number {
    const newLastNode = new Node(element);
    const lastNode = this._dummyTail.prev as AbstractNode;
    newLastNode.prev = lastNode;
    newLastNode.next = this._dummyTail;
    lastNode.next = newLastNode;
    this._dummyTail.prev = newLastNode;
    this._length++;
    return this._length;
  }

  /**
   * Adds an element to the front of the DoublyLinkedList.
   * @param {*} element
   * @returns {number} The new length of the DioublyLinkedList.
   */
  unshift(element: T): number {
    const newFirstNode = new Node(element);
    const firstNode = this._dummyHead.next as AbstractNode;
    newFirstNode.prev = this._dummyHead;
    newFirstNode.next = firstNode;
    firstNode.prev = newFirstNode;
    this._dummyHead.next = newFirstNode;
    this._length++;
    return this._length;
  }

  /**
   * Removes the element at the front of the DoublyLinkedList.
   * @returns {*} The element at the front of the DoublyLinkedList.
   */
  shift(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const firstNode = this._dummyHead.next as Node<T>;
    const newFirstNode = firstNode.next as AbstractNode;
    this._dummyHead.next = newFirstNode;
    newFirstNode.prev = this._dummyHead;
    firstNode.next = null;
    firstNode.prev = null;
    this._length--;

    return firstNode.value;
  }

  /**
   * Removes the element at the back of the DoublyLinkedList.
   * @returns {*} The element at the back of the DoublyLinkedList.
   */
  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const lastNode = this._dummyTail.prev as Node<T>;
    const newLastNode = lastNode.prev as AbstractNode;
    this._dummyTail.prev = newLastNode;
    newLastNode.next = this._dummyTail;
    lastNode.next = null;
    lastNode.prev = null;
    this._length--;

    return lastNode.value;
  }

  /**
   * Returns true if the DoublyLinkedList has no elements.
   * @returns {boolean}
   */
  isEmpty(): boolean {
    return this._length === 0;
  }

  /**
   * Returns the element at the front of the DoublyLinkedList.
   * @returns {*} The element at the front of the DoublyLinkedList.
   */
  front(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return (this._dummyHead.next as Node<T>).value;
  }

  /**
   * Returns the element at the back of the DoublyLinkedList.
   * @returns {*} The element at the back of the DoublyLinkedList.
   */
  back(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return (this._dummyTail.prev as Node<T>).value;
  }

  /**
   * Converts the contents of the DoublyLinkedList into an array.
   * @returns {Array<T>} An array of elements.
   */
  toArray(): Array<T> {
    const arr = [];
    let curr = this._dummyHead.next as Node<T>;

    for (let i = 0; i < this._length; i++) {
      arr.push(curr.value);
      curr = curr.next as Node<T>;
    }

    return arr;
  }

  /**
   * Creates a DoublyLinkedList instance from an array of elements.
   * @param {Array<T>} arr
   * @returns {DoublyLinkedListV2} A new DoublyLinkedList instance containing the element.
   */
  static fromArray<T>(arr: Array<T>): DoublyLinkedListV2<T> {
    const dll = new DoublyLinkedListV2<T>();
    arr.forEach(el => dll.push(el));
    return dll;
  }

  /**
   * Returns the head node of the DoublyLinkedList.
   * After calling this method, the DoublyLinkedList instance will be cleared
   * out and should not be used anymore.
   * Intended for users who want to manage their own nodes directly without a wrapper class.
   * @returns {Node} The internal head Node.
   */
  headNode(): Node<T> | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const head = this._dummyHead.next as Node<T>;
    const tail = this._dummyTail.prev as Node<T>;
    head.prev = null;
    tail.next = null;
    this._dummyHead.next = this._dummyTail;
    this._dummyTail.prev = this._dummyHead;
    this._length = 0;
    return head;
  }

  /**
   * Returns the number of elements in the DoublyLinkedList.
   * @returns {number} Number of elements in the DoublyLinkedList.
   */
  get length(): number {
    return this._length;
  }
}

export default DoublyLinkedListV2;
