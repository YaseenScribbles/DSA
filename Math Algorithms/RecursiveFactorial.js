function recursiveFactorial(n) {
  // F(0) = 1 base case for stopping the loop
  // F(1) = 1
  // F(2) = 2 * 1
  if (n === 0) return 1;
  return n * recursiveFactorial(n - 1); //logic
}

console.log(recursiveFactorial(6));

//Big O => O(n)