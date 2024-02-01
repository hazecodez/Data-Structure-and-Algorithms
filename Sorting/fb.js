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
console.log(sum);