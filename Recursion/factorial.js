function factorial(n){
  if(n===1 || n===0){
    return 1
  }
  return n*factorial(n-1)
}

console.log(factorial(4));


// function factorial(n){
//   let res = 1
//   for(let i =2 ;i<=n; i++){
//     res = res * i
//   }
//   return res
// }
// console.log(factorial(3))