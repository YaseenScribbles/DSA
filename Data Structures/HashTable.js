//Hash table is nothing but key value pairs
//But we already have object for that but object has kay conflict issues
//also we have map which can overcome object
//Exmaples: Database indexing, caches
//For fast lookup, insertion, deletion

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  display() {
    for (let index = 0; index < this.table.length; index++) {
      if (this.table[index]) {
        console.log(index, this.table[index]);
      }
    }
  }
}

// const table = new HashTable(50);

// table.set("Name", "Yaseen");
// table.set("Age", 29);
// console.log(table.get("Name"));
// table.remove("Name")
// table.set("Mane", "Demo"); //Causing collision because our hashing is simple, results in data loss
// table.display();

class HashTable2 {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let index = 0; index < key.length; index++) {
      total += key.charCodeAt(index);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let index = 0; index < this.table.length; index++) {
      if (this.table[index]) {
        console.log(index, this.table[index]);
      }
    }
  }
}

const table = new HashTable2(50);

table.set("Name", "Yaseen");
table.set("Age", 29);
console.log(table.get("Name"));
// table.remove("Name")
table.set("Mane", "Demo"); //Collision prevented
table.remove("Mane")
table.display();