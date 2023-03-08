function solution(string) {
  const arr = string.split('');
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === arr[i].toUpperCase()) {
      newArr.push(' ');
      newArr.push(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr.join('');
}

console.log(solution('camelCase'));
console.log('kebab-case');
console.log('PascalCase');
