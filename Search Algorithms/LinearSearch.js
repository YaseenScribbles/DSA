function linearSearch(array, t) {
  let foundIndex = -1;
  array.forEach((element, index) => {
    if (element === t) {
      foundIndex = index;
    }
  });
  return foundIndex;
}

const array = [-5, 10, 15, 20, 25];

console.log(linearSearch(array, -5));
console.log(linearSearch(array, 15));
console.log(linearSearch(array, 25));
console.log(linearSearch(array, 30));


//Big-O => O(n) 