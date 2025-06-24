function factorial(n) {
  let factorial = 1;
  while (n > 1) {
    factorial *= n;
    n--;
  }
  return factorial;
}

console.log(factorial(7));
//time complexity = O(n) linear
