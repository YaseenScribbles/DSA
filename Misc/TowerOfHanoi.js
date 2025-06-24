function towerOfHanoi(n, fromRod, toRod, usingRod) { //3,A,C,B
  if (n === 1) {
    console.log(`Move disc 1 from ${fromRod} to ${toRod}`); //logged 1,A,C,B
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod); //2,A,B,C //1,A,C,B
  console.log(`Move disc ${n} from ${fromRod} to ${toRod}`); //

  towerOfHanoi(n - 1, usingRod, toRod, fromRod); //1,C,B,A
}

towerOfHanoi(3, "A", "C", "B");


//Big-O => O(2^n)