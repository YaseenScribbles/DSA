const set = new Set([1, 2, 3]); //ony accepts unique values of any type
set.add(4); //to add
console.log(
  set.has(4) //to check whether the value exists
);

set.add(4); //ignore duplicate entry
set.delete(3); //to remove an element
console.log(set.size); //to know the length
set.clear(); //to clear the elements

for (const item of set) { //iterable
  console.log(item);
}
