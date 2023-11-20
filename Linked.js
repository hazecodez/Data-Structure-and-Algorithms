// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//         this.size = 0;
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null
//     }
//     isEmpty(){
//         return this.size === 0
//     }
//     addNode(value){
//         const node = new Node(value)
//         if(this.size === 0){
//             this.head = node;
//             this.tail = node;
//         }else{
//             this.tail.next = node;
//             this.tail = node;
//         }
//         this.size ++
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('empty');
//         }else{
//             let curr = this.head
//             let values = ''
//             while(curr){
//                 values += `${curr.value}`
//                 curr = curr.next
//             }
//             console.log(values)
//         }
//     }
// }
// const list = new LinkedList
// list.addNode(1)
// list.print()



function binary(arr,target,start,end){
    
    let mid = Math.floor((start+end)/2)
    if(arr[mid]===target){
        arr.splice(mid,1,0)
        return arr
    }
    while(start<=end){
        if(arr[mid]>target){
            return binary(arr,target,start,mid-1)
        }else{
            return binary(arr,target,mid+1,end)
        }
    }
}
let array = [1,2,3,4,5,6]
console.log(binary(array,5,0,array.length-1));