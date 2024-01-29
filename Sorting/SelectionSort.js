//ascending
let arr = [9,8,7,6,5,4,3]
function ascending(arr){
    for(let i=0;i<arr.length-1;i++){
        let minIdx = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] < arr[minIdx]){
                minIdx = j
            }
        }
        let temp = arr[minIdx]
        arr[minIdx] = arr[i]
        arr[i] = temp;
    }
    console.log(arr);
}

//descending====
function reverse(arr){
    for(let i=0;i<arr.length-1;i++){
        let minIdx = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] > arr[minIdx]){
                minIdx = j;
            }
        }
        let temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp
    }
    console.log(arr);
}
reverse(arr)
ascending(arr)


