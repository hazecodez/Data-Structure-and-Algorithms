//============sort array using merge sort algorithm
function mergeSort(arr){
    if(arr.length < 2 ){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    const sorted = [] 
    while(left.length && right.length){
        if(left[0] <= right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted , ...left, ...right]
}
const arr = [5,-9,-2,8,7,3,1]
console.log(mergeSort(arr));

//================reverse array using merge sort algorithm===========

function reverseArray(arr){
    if(arr.length < 2){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)
    return mergeReverseArr(reverseArray(left),reverseArray(right))
}
function mergeReverseArr(left,right){
    const reversed = []
    while(left.length && right.length){
        if(left[0] > right[0]){
            reversed.push(left.shift())
        }else{
            reversed.push(right.shift())
        }
    }
    return [...reversed, ...left, ...right]
}
// console.log(reverseArray(arr));


