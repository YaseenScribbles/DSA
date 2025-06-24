function isPrimeNumber(n) {
  if (n === 1) return false;
  if (n === 2) return true;
  if (n > 2) {
    for (let index = 2; index < n; index++) {
      if (n % index === 0) return false;
      return true;
    }
  }
}

console.log(isPrimeNumber(7));
console.log(isPrimeNumber(2));
console.log(isPrimeNumber(5));
console.log(isPrimeNumber(4));

//time complexity O(n) -> linear

//Optimized Solution
//if index < n  changed to Math.sqrt(n) primality still works and time complexity reduces
//    for (let index = 2; index < Math.sqrt(n); index++) {
//    if (n % index === 0) return false;
//    return true;
//  }
//time complexity Big-O = O(sqrt(n))

