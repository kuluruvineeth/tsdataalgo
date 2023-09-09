export interface Tree<T> {
  isEmpty(): boolean;
  has(data: T): boolean;
  insert(data: T): void;
  findMin(): T;
  findMax(): T;
  inOrderTraversal(array: T[]): T[];
  preOrderTraversal(array: T[]): T[];
  postOrderTraversal(array: T[]): T[];
}
