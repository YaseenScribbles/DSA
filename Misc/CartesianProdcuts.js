function cartesianProducts(arr1, arr2) {
  const cartesianProducts = [];
  for (let i = 0; i < arr1.length; i++) { //n
    for (let j = 0; j < arr2.length; j++) { //m
      cartesianProducts.push([arr1[i], arr2[j]]);
    }
  }
  return cartesianProducts;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
console.log(cartesianProducts(arr1, arr2));

//Big-O => O(mn) if length is same for both the arrays then O(n^2)
