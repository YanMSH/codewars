function fib(n: number): bigint {
  if (n === 0 || n === 1) {
    return BigInt(n);
  } else if (n >= 2 && n % 2 === 0) {
    let halfn = n / 2;
    let fHalf = fib(halfn);

    return BigInt((2n * fib(halfn - 1) + fHalf) * fHalf);
  } else if (n >= 2) {
    let halfn = (n + 1) / 2;
    let fHalf1 = fib(halfn - 1);
    let fHalf2 = fib(halfn);

    return BigInt(fHalf2 * fHalf2 + fHalf1 * fHalf1);
  } else {
    let a = 0n;
    let b = 1n;
    for (let i = 0; i > n; i--) {
      [a, b] = [b - a, a];
    }
    return a;
  }
}
