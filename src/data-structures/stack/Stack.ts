export interface StackInterface<T> {
  push(value: T): void;
  pop(): T;
  length(): number;
  isEmpty(): boolean;
  top(): T | null;
}
