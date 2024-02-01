function factorial(n) {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res = res * i;
  }
  return res;
}

// console.log(factorial(5));
//======================================================================

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// console.log(isPrime(1));
//======================================================================
const obj = [
  { a: 10 },
  { b: 180 },
  { a: 10 },
  { b: 180 },
  { a: 10 },
  { b: 180 },
];
let sum = 0
for(let item of obj) {
    for(let key in item) {
        sum += item[key]
    }
}
// console.log(sum);   //570
//======================================================================