function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function eight(func = undefined) {
  const number = 8;
  if (func) {
    return func(number);
  } else {
    return number;
  }
}

function three(func) {
  const number = 3;
  if (func) {
    return func(number);
  } else {
    return number;
  }
}

function six(func) {
  const number = 6;
  if (func) {
    return func(number);
  } else {
    return number;
  }
}

function two(func) {
  const number = 2;
  if (func) {
    return func(number);
  } else {
    return number;
  }
}

function dividedBy(num2) {
  return function (num) {
    console.log('actually its', num / num2);
    return Math.floor(num / num2);
  };
}

function plus(num2) {
  return function (num) {
    return num + num2;
  };
}
function minus(num2) {
  return function (num) {
    return num - num2;
  };
}
function times(num2) {
  return function (num) {
    return num * num2;
  };
}

console.log('8/3', eight(dividedBy(three())));
console.log('8+3', eight(plus(three())));
console.log('8-3', eight(minus(three())));
console.log('8*3', eight(times(three())));
console.log('6/2', six(dividedBy(two())));
console.log('6/3', six(dividedBy(three())));
console.log('8+8+8', eight(plus(eight(plus(eight())))));
