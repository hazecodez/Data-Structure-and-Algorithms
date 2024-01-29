//==================================DATA STRUCTURE==========================================
//hashSet

let arr2 = new Set([7, 5, 2, 3, 9, 8, 0]);
let hey = [...arr2];
let tar = 10;
let arr1 = [];
for (let i = 0; i < hey.length; i++) {
  if (arr2.has(tar - hey[i])) {
    arr1.push(hey[i], tar - hey[i]);
    break;
  }
}
console.log(arr1);

let arr = [6, 1, 6, 8, 10, 4, 15, 6, 3, 9, 6];
let len = arr.length;
arr = arr.filter((data) => data !== 6);
let newlen = arr.length;
for (let i = 1; i <= len - newlen; i++) {
  arr.push(6);
}
console.log(arr);

fibonacci;
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(fibonacci(5).pop());
console.log(fibonacci(3));
