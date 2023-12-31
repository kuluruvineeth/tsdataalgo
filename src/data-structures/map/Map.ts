import { HashMapEntry } from './HashMap';

/**
 * This interface is a representation of the Map data structure
 */
export interface Map<K, V> {
  getSize(): number;
  set(key: K, value: V): void;
  get(key: K): V | null;
  delete(key: K): void;
  has(key: K): boolean;
  clear(): void;
  keys(): K[];
  values(): V[];
  entries(): HashMapEntry<K, V>[];
}
