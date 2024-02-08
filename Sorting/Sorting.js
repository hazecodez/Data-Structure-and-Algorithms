let ArraySam = [3, 5, 1, 9, 6, 3, 9, 8, 11];

function bubbleSort(array) {
  let isSwapped = false;
  for (let i = 0; i < array.length; i++) {
    isSwapped = false;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  console.log(`Bubble sort : ${array}`);
}

// bubbleSort(ArraySam)

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minVal = i;
    for (let j = i; j < array.length; j++) {
      if (array[minVal] > array[j]) {
        minVal = j;
      }
    }
    let temp = array[i];
    array[i] = array[minVal];
    array[minVal] = temp;
  }
  console.log(`Selection sort : ${array}`);
}

// selectionSort(ArraySam)

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let curr = array[i];
    while (array[j] > curr) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = curr;
  }
  console.log(`Insertion sort :  ${array}`);
}
// insertionSort(ArraySam)

function split(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return mergeSort(split(left), split(right));
}
function mergeSort(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
}
// console.log(`Unsorted : ${ArraySam}
// Merge sort : ${split(ArraySam)}`);

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }

  return arr;
}
function partition(arr, left, right) {
  let pivot = arr[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, right);
  return i;
}
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(`Unsorted : ${ArraySam}
Quick sort : ${quickSort(ArraySam)}`);
