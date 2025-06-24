function quickSort(arr) {
  //base case for recursion to stop
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1]; //we can take any element as pivot, but here we took the last element
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  //recursion
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [5, 8, -6, 2, -1];

console.log(quickSort(arr));

//Worst case complexity - O(n^2)
//Average case complexity - O(nlogn) For for loop n and for dividing the array log n combining both we get this
