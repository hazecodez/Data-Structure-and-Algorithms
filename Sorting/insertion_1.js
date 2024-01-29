function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let curr = array[i];
    let j = i - 1;
    while (j >= 0 && curr < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = curr;
  }
  return array;
}

console.log(insertionSort([3, 1, 5, 2, 8, 4]));
