//My try did not work
// function isPowerOfTwo(n) {
//   let quotient = RemainderAndQuotientOfDivisorTwo(n).quotient;
//   let remainder = RemainderAndQuotientOfDivisorTwo(n).remainder;
//   while (remainder === 0 || quotient !== 1) {
//     quotient = RemainderAndQuotientOfDivisorTwo(quotient).quotient;
//     remainder = RemainderAndQuotientOfDivisorTwo(quotient).remainder;
//   }
//   return remainder === 0 && quotient === 1 ? true : false;
// }


// function RemainderAndQuotientOfDivisorTwo(n) {
//   return {
//     quotient: n / 2,
//     remainder: n % 2,
//   };
// }

// console.log(isPowerOfTwo(8));

function isPowerOfTwo(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(6));
console.log(isPowerOfTwo(7));
console.log(isPowerOfTwo(8));

//Big O: O(log n)

function isPowerOfTwoAdv(n) {
  if (n < 1) return false;
  while (n >= 1) {
    return (n & (n - 1)) === 0;
  }
}

console.log("Adv. method");

console.log(isPowerOfTwoAdv(1));
console.log(isPowerOfTwoAdv(2));
console.log(isPowerOfTwoAdv(3));
console.log(isPowerOfTwoAdv(4));
console.log(isPowerOfTwoAdv(5));
console.log(isPowerOfTwoAdv(6));
console.log(isPowerOfTwoAdv(7));
console.log(isPowerOfTwoAdv(8));
