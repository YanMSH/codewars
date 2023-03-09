function productFib(prod) {
  const fibonacci = [0, 1];
  for (let i = 0; fibonacci[i] < Math.sqrt(prod); i++) {
    fibonacci.push(fibonacci[i] + fibonacci[i + 1]);
  }
  for (let j = 0; j < fibonacci.length; j++) {
    if (fibonacci[j] * fibonacci[j + 1] === prod) {
      return [fibonacci[j], fibonacci[j + 1], true];
    }
    if (fibonacci[j] * fibonacci[j + 1] > prod) {
      return [fibonacci[j], fibonacci[j + 1], false];
    }
  }
}

function productFib(prod) {
  const fibonacci = [0, 1];
  for (let i = 0; fibonacci[i] < prod; i++) {
    if (fibonacci[i] * fibonacci[i + 1] < prod) {
      fibonacci.push(fibonacci[i] + fibonacci[i + 1]);
    } else {
      return [fibonacci[i], fibonacci[i + 1], fibonacci[i] * fibonacci[i + 1] === prod];
    }
  }
}
