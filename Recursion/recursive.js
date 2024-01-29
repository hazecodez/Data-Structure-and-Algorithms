function factorial(n) {
  if (n == 1 || n == 0) return 1;
  return n * factorial(n - 1);
}

// console.log(factorial(4));      //output : 24
//==================================================================================================================

function sumRange(n) {
  if (n === 1) return 1;
  return n + sumRange(n - 1);
}

// console.log(sumRange(3));       //output : 6
//==================================================================================================================

function power(num, times) {
  if (times === 0) return 1;
  return num * power(num, times - 1);
}

//console.log(power(2, 4));         //output : 16
//==================================================================================================================

let isEven = allValue([2, 4, 6, 10], (num) => {
  if (num % 2 === 0) return true;
});

function allValue(arr, cb) {
  var copy = copy || arr.slice();
  if (copy.length === 0) return true;
  if (cb(copy[0])) {
    copy.shift();
    return allValue(copy, cb);
  } else {
    return false;
  }
}

// console.log(isEven);                //true if all elements in array satisfy the callback function statement.
//==================================================================================================================

function productOfArray(array) {
  if (array.length === 0) return 1;
  return array.shift() * productOfArray(array);
}

// console.log(productOfArray([1,2,3,10]));       //output : 60
//==================================================================================================================

function contains(obj, value) {
  for ( let key in obj) {
    if (typeof obj[key] === "object") {
      return contains(obj[key], value);
    }
    if (obj[key] === value) return true;
  }
  return false;
}
const object = {
  one: {
    two: {
      three: {
        number: 33,
        name: "hashir",
      },
    },
  },
};
// console.log(contains(object, 33));        //return true, if given nested object contains given value.
//==================================================================================================================
