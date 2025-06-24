//Series of connected nodes
//Each node consists a data and pointer to the next node
//Can be easily inserted or removed
//but accessing causes linear time complexity
//can be uses for three main oprations
//1. Insertion - Can be added at beginning, end or at a given index
//2. Deletion - to remove an element given its index or value
//3. Search - to find the element given its value
//Examples
//All apllications of stack and queue are apllications of linked list
//Image viewer

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  //Time complexity O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  //Time complexity O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index >= this.getSize()) {
      console.log("Invalid index");
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.getSize()) {
      console.log("Invalid index");
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let prev = this.head;
    while (prev.next) {
      if (prev.next.value === value) {
        prev.next = prev.next.next;
        this.size--;
        return;
      }
      prev = prev.next;
    }

    console.log("Value not found");
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let curr = this.head;
    for (let index = 0; index < this.size; index++) {
      if (curr.value === value) {
        return index;
      }
      curr = curr.next;
    }
    return -1;
  }

  reverse() {
    if (this.isEmpty()) {
      return null;
    }

    if(this.getSize() === 1){
      return; 
    }

    let curr = this.head;
    let prev = null;
    let next;    
    while (curr) {
      next = curr.next; //Store next node      
      curr.next = prev; //Reverse the current node
      prev = curr; //Move prev to current
      curr = next; //Move tp next node      
    }
    this.head = prev; //Update the head to last processed node
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return false;
    } else {
      let curr = this.head;
      let values = "";
      while (curr) {
        values += `${curr.value} `;
        curr = curr.next;
      }
      console.log(values);
    }
  }
}

const list = new LinkedList();
console.log("Is list empty ? ", list.isEmpty());
console.log("Size of list ? ", list.getSize());
list.prepend(30);
list.prepend(40);
list.prepend(50);
list.prepend(60);
list.print();
list.append(20);
list.append(10);
list.print();
list.insert(10, 10);
list.insert(0, 2);
list.print();
list.removeFrom(2);
list.print();
list.removeValue(20);
list.print();
console.log(list.search(50));
console.log(list.search(100));
console.log(list.search(10));
list.reverse()
list.print()
