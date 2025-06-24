function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (arr[middleIndex] === target) {
    return middleIndex;
  }

  if (target > arr[middleIndex]) {
    return search(arr, target, middleIndex + 1, rightIndex);
  } else {
    return search(arr, target, leftIndex, middleIndex - 1);
  }
}

const array = [-5, 1, 6, 10, 15];
console.log(recursiveBinarySearch(array, 1));
console.log(recursiveBinarySearch(array, 6));
console.log(recursiveBinarySearch(array, 15));
console.log(recursiveBinarySearch(array, 20));

//Big-O => O(log n)
