//==================================DATA STRUCTURE==========================================
//hashSet

// let arr = new Set([7,5,2,3,9,8,0]);
// let hey = [...arr]
// let tar =10
// let arr1 =[]
// for(let i=0;i<hey.length;i++){
//   if(arr.has(tar-hey[i])){
//     arr1.push(hey[i],tar-hey[i])
//     break;
//   }
// }
// console.log(arr1);

// let arr = [6,1,6,8,10,4,15,6,3,9,6]
// let len = arr.length;
// arr = arr.filter(data => data !== 6)
// let newlen = arr.length;
// for(let i=1;i<=len-newlen;i++){
//   arr.push(6)
// }
// console.log(arr)

//fibonacci
// function fibonacci(n){
//   const fib = [0,1]
//   for(let i = 2; i < n; i++){
//     fib[i] = fib[i-1] + fib[i-2]
//   }
//   return fib
// }
// console.log(fibonacci(1))
// console.log(fibonacci(3))

//factorial
// function factorial(n){
//   if(n===1 || n===0){
//     return 1
//   }
//   return n*factorial(n-1)
// }
// console.log(factorial(0))

// function factorial(n){
//   let res = 1
//   for(let i =2 ;i<=n; i++){
//     res = res * i
//   }
//   return res
// }
// console.log(factorial(3))


// function binary(arr,target,start,end){
    
//     let mid = Math.floor((start+end)/2)
//     if(arr[mid]===target){
//         arr.splice(mid,1,0)
//         return arr
//     }
//     while(start<=end){
//         if(arr[mid]>target){
//             return binary(arr,target,start,mid-1)
//         }else{
//             return binary(arr,target,mid+1,end)
//         }
//     }
// }
// let array = [1,2,3,4,5,6]
// console.log(binary(array,5,0,array.length-1));

function binary(arr,t){
  let start = 0;
  let end = arr.length - 1;
  
  while(start<=end){
    let mid = Math.floor((start + end) /2)
    if(arr[mid]=== t){
      return mid;
    }else if(arr[mid]<t){
      start = mid + 1;
    }else{
      end = mid - 1;
    }
  }
  return -1;
}

console.log(binary([1,2,3,4,5,6,7,8,9],8))

function recursive(arr,t){
  return search(arr,t,0,arr.length-1)
}

function search(arr,target,start,end){
  if(start > end){
    return -1
  }
  let mid = Math.floor((start+end)/2)
  if(arr[mid]==target){
    return mid
  }else if(arr[mid]>target){
    return search(arr,target,start,mid-1)
  }else{
    return search(arr,target,mid+1,end)
  }
  
}

// console.log(recursive([1,2,3,4,5,6,7,8,9],9))

class Node {
  constructor(value){
      this.value= value;
      this.next = null;
      this.prev = null;
  }
}
class Linked {
  constructor(){
      this.head = null;
      this.tail = null;
      this.size = 0;
  }
  isEmpty(){
      return this.size === 0
  }

  append(value){
      const node = new Node(value)
      if(this.isEmpty()){
          this.head = node;
          this.tail = node;
      }else{
          this.tail.next = node;
          this.tail = node;
      }
      this.size++
  }
  print(){
      if(this.isEmpty()){
          return null
      }else{
          let curr = this.head;
          let values = ''
          while(curr){
              values += `${curr.value}`
              curr = curr.next
          }
          console.log(values)
      }
  }
      
      
}

const list = new Linked
list.append(8)
list.append(5)
list.append(2)
list.append(1)
list.print()


