function quick(array) {
  if (array.length < 2) return array;
  let pivot = array[array.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (pivot < array[i]) {
      right.push(array[i]);
    } else {
      left.push(array[i]);
    }
  }

  return quick(left).concat(pivot, quick(right));
}

console.log(quick([3, 1, 5, 2, 8, 4]));
