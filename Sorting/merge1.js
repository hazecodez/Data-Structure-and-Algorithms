function split(array) {
  if (array.length < 2) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  return merge(split(left), split(right));
}
function merge(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
}

let array = [5, -9, -2, 8, 7, 3, 1];
console.log(split(array));
