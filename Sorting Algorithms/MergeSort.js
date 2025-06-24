function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);
  return merge(mergeSort(leftArray), mergeSort(rightArray)); //logn
}

function merge(leftArray, rightArray) {
  const sortedArray = [];
  while (leftArray.length && rightArray.length) { //n
    if (leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }

  return [...sortedArray, ...leftArray, ...rightArray];
}


const arr = [5, 8, -6, 2, -1];

console.log(mergeSort(arr));

//Big-O=>O(nlogn) but actually time complexity varies as per others say