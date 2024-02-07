let ArraySam = [3,5,1,9,6,3,9,8,11];

function bubbleSort(array) {
    let isSwapped =false;
    for(let i=0;i<array.length;i++) {
        isSwapped = false;
        for(let j=i+1;j<array.length;j++) {
            if(array[i] > array[j]) {
                let temp = array[i]
                array[i] = array[j] 
                array[j] = temp;
                isSwapped = true;
            }
        }
        if(!isSwapped) break
    }
    console.log(`Bubble sort : ${array}`);
}

// bubbleSort(ArraySam)

function selectionSort(array) {
    for(let i = 0; i<array.length; i++) {
        let minVal = i;
        for(let j = i; j< array.length; j++) {
            if(array[minVal] > array[j]) {
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
    for(let i =1;i<array.length; i++) {
        let j = i-1;
        let curr = array[i];
        while(array[j] > curr) {
            array[j+1] = array[j]
            j--
        }
        array[j+1] = curr;
    }
    console.log(`Insertion sort :  ${array}`);
}
insertionSort(ArraySam)
