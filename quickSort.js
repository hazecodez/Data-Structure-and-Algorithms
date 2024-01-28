//quick sorting using recurssion
function sortQuick(array){
    if(array.length < 2){
        return array
    }
    let left = [] 
    let right = []
    let pivot = array[array.length-1]
    for(let i =0 ;i<array.length-1;i++){
        if(pivot > array[i]){
            left.push(array[i])
        }else{
            right.push(array[i])
        }
    }
    return sortQuick(left).concat(pivot,sortQuick(right))
}

let array = [22,-88,45,66,75,-99]
console.log(sortQuick(array));

//=========================================================================================

//quickSort without create new arrays

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      const pivot = partition(arr, left, right)
      quickSort(arr, left, pivot - 1)
      quickSort(arr, pivot + 1, right)
    }
    return arr
  }
  
  function partition(arr, left, right) {
    const pivot = arr[right]
    let i = left
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        swap(arr, i, j)
        i++
      }
    }
    swap(arr, i, right)
    return i
  }
  
  function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  
  const arr = [8, 20, -2, 4, -6]
  quickSort(arr)
  console.log(arr)
  
  //============================================================================
