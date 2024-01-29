function factorial(n) {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res = res * i;
  }
  return res;
}

// console.log(factorial(5));

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// console.log(isPrime(1));
