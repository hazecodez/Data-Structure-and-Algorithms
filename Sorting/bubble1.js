function bubble_1(array) {
  let isSwapped = false;
  for (let i = 0; i < array.length; i++) {
    isSwapped = false;
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return array;
}

console.log(bubble_1([3, 1, 5, 2, 8, 4]));

function bubble_2(array) {
  let isSwapped = false;
  for (let i = 0; i < array.length; i++) {
    isSwapped = false;
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] > array[j]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return array;
}

console.log(bubble_2([3, 1, 5, 2, 8, 4]));
