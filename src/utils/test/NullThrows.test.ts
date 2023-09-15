import NullThrows from '../NullThrows';

describe('nullthrows()', () => {
  test('throws for null values', () => {
    expect(() => NullThrows(null)).toThrowError();
    expect(() => NullThrows(undefined)).toThrowError();
  });

  test('not throw for valid values', () => {
    expect(NullThrows(1)).toEqual(1);
    expect(NullThrows('hello')).toEqual('hello');
    expect(NullThrows(NaN)).toEqual(NaN);
    expect(NullThrows([])).toEqual([]);
    expect(NullThrows({})).toEqual({});
    expect(NullThrows(true)).toEqual(true);
    expect(NullThrows(false)).toEqual(false);
  });
});
