function binary(arr, target, start = 0, end = arr.length - 1) {
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    arr.splice(mid, 1, 0);
    return arr;
  }
  while (start <= end) {
    if (arr[mid] > target) {
      return binary(arr, target, start, mid - 1);
    } else {
      return binary(arr, target, mid + 1, end);
    }
  }
}
let array = [1, 2, 3, 4, 5, 6];
console.log(binary(array, 5));
