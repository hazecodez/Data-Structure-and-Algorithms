function insertionSort(array){
    for(let i =1 ;i<array.length;i++){
        let curr = array[i]
        let j = i - 1;
        while(j>=0 && curr < array[j]){
            array[j+1] = array[j]
            array[j] = curr;
            j--
        }
    }
    return array
}
console.log(insertionSort([8,9,5,8,1,4,3]));



//merge two arrays,sort and return unique
function mergeInsertion(array){
    function sort(array){
        for(let i =1 ;i<array.length;i++){
            let curr = array[i]
            let j = i - 1;
            while(j>=0 && curr < array[j]){
                array[j+1] = array[j]
                array[j] = curr;
                j--
            }
        }
        return array
    }
    let merged = arr1.concat(arr2)
    merged = sort(merged)
    let unique = new Set(merged)
    return [...unique]
}
const arr1 = [0,6,5,3,9,7,2,11]
const arr2 = [8,9,5,8,1,4,3]
console.log(mergeInsertion([arr1,arr2]));