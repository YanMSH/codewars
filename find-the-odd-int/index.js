function findOdd(A) {
  const dict = {};
  for (let i = 0; i <= A.length; i += 1) {
    if (dict[A[i]]) {
      dict[A[i]] += 1;
    } else {
      dict[A[i]] = 1;
    }
  }
  return Number(Object.entries(dict).find((item) => item[1] % 2 !== 0)[0]);
}

console.log(findOdd([1, 1, 2]));
