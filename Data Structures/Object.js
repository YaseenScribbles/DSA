const obj = {
    name: "Yaseen",
    age: 29,
    "key-three": true,
    sayMyName: function(){
        console.log(`Hi my name is ${this.name}`);        
    }
}

obj.hobby = "cricket";

console.log(obj);

console.log(obj.name); //to access via dot notation
console.log(obj['age']); //to access via square bracket
console.log(obj['key-three']); //to access properties with symbols and spaces

delete obj.hobby;
console.log(obj);

obj.sayMyName()

//.keys(), .values(), .entries()

//Big-O fro time complexity
// insert -> O(1)
// remove -> O(1)
// access -> O(1)
// search -> O(n)
// Object.keys() -> O(n)
// Object.values() -> O(n)
// Object.entries() -> O(n)

