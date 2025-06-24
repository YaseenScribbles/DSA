const arr = [1, 2, 3, "Yaseen"] //Array can be mixed of any values
console.log(arr);

arr.push(4) //to add item a the end
console.log(arr);

arr.unshift(0) //to add item at the start
console.log(arr);

arr.pop() //to remove last item
console.log(arr);

arr.shift() //to remove first item
console.log(arr);

for(const item of arr){ //arrays are iterables. i.e. can be used in loops
    console.log(item);    
}

//map, filter, reduce, concat, slice, splice

//Big-O time complexity

//insert/remove at the end -> O(1)
//insert/remove at the beginning -> O(n)
//access -> O(1)
//search -> O(n)
//push/pop -> O(1)
//shift/unshift/slice/splice/concat -> O(n)
//forEach/map/filter/reduce -> O(n)





