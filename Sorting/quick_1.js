function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
    return arr;
  }
}

function partition(Arr, left, right) {
  let pivot = Arr[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (Arr[j] < pivot) {
      swap(Arr, i, j);
      i++;
    }
  }
  swap(Arr, i, right);
  return i;
}
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return;
}

console.log(quickSort(['ff','hh','qq','aa','hello']));