function findNb(m) {
  let remains = 0;
  for (let i = 1; remains < m; i += 1) {
    remains += Math.pow(i, 3);
    if (remains === m) {
      return i;
    }
  }
  return -1;
}

console.log(findNb(4183059834009), 2022);
console.log(findNb(24723578342962), -1);
console.log(findNb(135440716410000), 4824);
console.log(findNb(40539911473216), 3568);
