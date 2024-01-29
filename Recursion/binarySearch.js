function recursive(arr, t) {
  return search(arr, t, 0, arr.length - 1);
}

function search(arr, target, start, end) {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] == target) {
    return mid;
  } else if (arr[mid] > target) {
    return search(arr, target, start, mid - 1);
  } else {
    return search(arr, target, mid + 1, end);
  }
}

console.log(recursive([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
