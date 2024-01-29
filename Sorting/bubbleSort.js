//ascending order
function bubbleSort_1(array){
    let isSwapped = false;
    for(let i=0;i<array.length;i++){
        isSwapped = false;
        for(let j = 0;j<array.length;j++){
            if(array[j]>array[j+1]){
                let temp = array[j+1]
                array[j+1] = array[j]
                array[j] = temp;
                isSwapped = true;
            }
        }
        if(!isSwapped){
            break;
        }
    }
    return array
}

//Time Complexity - Big-o = O(n^2) - because of the nested loop (Quadratic complexity)

//===========================================================================

//descending
function descendingBubble(array){
    let isAlready = false;
    for(let i = 0;i<array.length;i++){
        isAlready = false;
        for(let j=0;j<array.length;j++){
            if(array[j] < array[j+1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
                isAlready = true;
            }
        }
        if(!isAlready){
            break;
        }
    }
    return array
}

//=============================================================================

//merge and sort
function sortAndMerge2Array(arr1,arr2){
    function swapped(array){
        let isSwapped = false;
    for(let i =0;i<array.length;i++){
        isSwapped = false;
        for(let j=0;j<array.length;j++){
            if(array[j]>array[j+1]){
                let temp = array[j+1]
                array[j+1] = array[j]
                array[j] = temp;
                isSwapped = true;
            }
        }
        if(!isSwapped){
            break;
        }
    }
    return array
    }
    let merged = arr1.concat(arr2)
    return swapped(merged)
}
let arr1 = [-6,20,8,-2,4]
let arr2 = [2,5,3,7,8,9]
console.log(sortAndMerge2Array(arr1,arr2));

//==================cartesian product=============
function cartesian(arr1,arr2){
    let res = [];
    for(let i = 0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            res.push([arr1[i],arr2[j]])
        }
    }
    return res
}

const array1 = [1,2,3]
const array2 = [9,8,7,6]
console.log(cartesian(array1,array2));

//Time Complexity - Big-O = O(mn) - because both arrays are different length

//=======================Climbing Stair Case=====================================
