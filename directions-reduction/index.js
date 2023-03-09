function dirReduc(arr) {
  const isOpposite = (dir1, dir2) => {
    const oppositeX = ['NORTH', 'SOUTH'];
    const oppositeY = ['EAST', 'WEST'];
    if (dir1 === dir2) {
      return false;
    }
    return (
      (oppositeX.includes(dir1) && oppositeX.includes(dir2)) ||
      (oppositeY.includes(dir1) && oppositeY.includes(dir2))
    );
  };
  const iterate = (array) => {
    if (array.length < 2) {
      return array;
    }
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (!isOpposite(array[i], array[i + 1])) {
        newArray.push(array[i]);
      } else {
        i += 1;
      }
    }
    if (newArray.length === array.length) {
      return newArray;
    } else {
      return iterate(newArray);
    }
  };
  return iterate(arr);
}
