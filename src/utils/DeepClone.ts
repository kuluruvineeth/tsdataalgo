import { isArray, isObject } from './LangUtils';

export default function deepClone<T>(val: T): T {
  if (isArray(val)) {
    // @ts-expect-error: Hard to type this.
    return (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Array((val as Array<any>).length)
        .fill(null)
        // @ts-expect-error: Hard to type this.
        .map((_, i) => deepClone(val[i]))
    );
  }

  if (isObject(val)) {
    const objClone = {};
    Object.keys(val!).forEach(key => {
      // @ts-expect-error: Hard to type this.
      objClone[key] = deepClone(val[key]);
    });

    // @ts-expect-error: Hard to type this.
    return objClone;
  }

  return val;
}
