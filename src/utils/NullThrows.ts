function NullThrows<T>(value: T | null | undefined): T | undefined {
  if (value === null) {
    throw Error('Unexpected null value');
  }

  return value;
}

export default NullThrows;
