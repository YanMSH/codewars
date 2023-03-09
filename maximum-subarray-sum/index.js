var maxSequence = function (arr) {
  let maxSum = 0;
  let currentSum = 0;
  arr.forEach((num) => {
    currentSum = Math.max(0, currentSum + num);
    maxSum = Math.max(maxSum, currentSum);
  });
  return maxSum;
};
