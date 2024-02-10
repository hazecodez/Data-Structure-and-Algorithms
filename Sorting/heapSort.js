function maxHeapify(arr, index, size) {
    let leftChild = 2 * index + 1;
    let rightChild = 2 * index + 2;
    let largest = index;
    if( leftChild < size && arr[leftChild] > arr[largest]) {
        largest = leftChild;
    }
    if( rightChild < size && arr[rightChild] > arr[largest]) {
        largest = rightChild;
    }
    if(largest !== index){
        let temp = arr[index]
        arr[index] = arr[largest]
        arr[largest] = temp
        maxHeapify(arr , largest , size)
    }
}
function heapSort(array) {
    const n = array.length;
    //array convert to heap==========
    for( let i = Math.floor((n/2) - 1); i >= 0; i--) {
        maxHeapify(array , i , n)
    }
    //===swapping max value with the last element
    for(let j = n-1 ; j >= 0; j-- ) {
        let temp = array[0]
        array[0] = array[j]
        array[j] = temp;
        maxHeapify(array , 0 , j)
    }
    return array
}

//merge two arrays and sorting by heap sort algorithm

function mergeAndSort(array1 , array2) {
    return heapSort(array1.concat(array2))
}

console.log(heapSort([3,8,25,1,2,38]));