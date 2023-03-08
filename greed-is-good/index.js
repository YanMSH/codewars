function score(dice) {
  const numDict = {};
  let scoreSum = 0;
  dice.forEach((num) => {
    if (numDict[num]) {
      numDict[num] += 1;
    } else {
      numDict[num] = 1;
    }
  });
  numDict[6] >= 3 ? (scoreSum += 600) : (scoreSum += 0);
  if (numDict[5] >= 3) {
    scoreSum += 600;
    numDict[5] -= 3;
  }
  if (numDict[1] >= 3) {
    scoreSum += 1000;
    numDict[1] -= 3;
  }

  numDict[4] >= 3 ? (scoreSum += 400) : (scoreSum += 0);
  numDict[3] >= 3 ? (scoreSum += 300) : (scoreSum += 0);
  numDict[2] >= 3 ? (scoreSum += 200) : (scoreSum += 0);
  numDict[1] > 0 ? (scoreSum += numDict[1] * 100) : (scoreSum += 0);
  numDict[5] > 0 ? (scoreSum += numDict[5] * 50) : (scoreSum += 0);
  return scoreSum;
}

console.log('Zero', score([2, 3, 4, 6, 2]));
console.log('Four hundreds', score([4, 4, 4, 3, 3]));
console.log('Four hundreds fifty', score([2, 4, 4, 5, 4]));
