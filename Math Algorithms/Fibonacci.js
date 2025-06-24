let n = 7;
let initArray = [0, 1];
let lastNumber;
let prevToLast;
let numberToAdd;

for (let index = 2; index < n; index++) {
  lastNumber = initArray[index - 1];
  prevToLast = initArray[index - 2];
  numberToAdd = lastNumber + prevToLast;
  initArray.push(numberToAdd);
}

console.log(initArray);

function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(10));

//time complexity = O(n) linear
