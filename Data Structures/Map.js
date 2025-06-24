const map = new Map([
  [1, "Yaseen"],
  [2, "Suhaina"],
]);

map.set(3, "Inaara"); //to add new entry

console.log(map.has(3)); //to check if exists

map.set(4, "unknown");
map.delete(4); //to remove

console.log(map.size); // to know the length
map.clear(); //to remove all

for (const [key, value] of map) {
  //Iterables
  console.log(`${key}: ${value}`);
}
