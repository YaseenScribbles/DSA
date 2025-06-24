function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1; //assumed as sorted 
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j]; // Shift element to the right
      j--;
    }
    arr[j + 1] = numberToInsert; // Insert the number at the correct position
  }
  return arr;
}

const arr = [5, 8, -6, 2, -1];

console.log(insertionSort(arr));
//Big-O=>O(n^2)
