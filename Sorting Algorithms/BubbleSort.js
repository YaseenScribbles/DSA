function bubbleSort(arr) {
  let isSwapped;
  do {
    isSwapped = false;
    for (let index = 0; index < arr.length - 1; index++) {
      if (arr[index] > arr[index + 1]) {
        const element = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = element;
        // Or  [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]]
        isSwapped = true;
      }
    }
  } while (isSwapped);
  return arr;
}

const arr = [20, -6, 5, 2, 10];
console.log(bubbleSort(arr));

//Big O => O(n^2) nested loop
