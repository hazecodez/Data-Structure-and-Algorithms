function selectionSort(array) {
    for(let i=0;i<array.length-1;i++) {
        let minInx = i;
        for(let j=i+1;j<array.length;j++) {
            if(array[minInx] > array[j] ) {
                minInx = j;
            }
        }
        let temp = array[i];
        array[i] = array[minInx];
        array[minInx] = temp
    }
    return array
}

console.log(selectionSort([3,1,5,2,8,4]));