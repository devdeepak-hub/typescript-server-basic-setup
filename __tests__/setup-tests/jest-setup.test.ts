function sum(a: number, b: number): number {
  return a + b;
}

describe('sample test for jest setup', () => {
  test('testing typescript setup', () => {
    expect(sum(1, 4)).toBe(5);
  });
});
