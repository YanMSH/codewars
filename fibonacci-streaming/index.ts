export function* fibonacciSequence(): Iterator<bigint> {
  let a = 1n;
  let b = 1n;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
