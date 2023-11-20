function selection_1(array){
    let j = 0;
    let small = array[0]
    let index = 0;
    for(let i=j;i<array.length;i++){
        if(array[i] < small){
            small = array[i]
            index = i
        }
        if(i == array.length - 1){
            array[index] = array[j]
            array[j] = small;
            i = j;
            j++;
        }
    }
    return array
}
let array = [4,55,1,33,7,8,9,12]
console.log(selection_1(array));

