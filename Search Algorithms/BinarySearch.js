function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === target) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

const array = [-5, 1, 6, 10, 15];
console.log(binarySearch(array, 1));
console.log(binarySearch(array, 6));
console.log(binarySearch(array, 15));
console.log(binarySearch(array, 20));

//Big-O => O(log n) 
