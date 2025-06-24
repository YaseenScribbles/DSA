const LinkedList = require("./LinkedListWithTail");
class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(element) {
    this.list.prepend(element);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  size() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

const stack = new LinkedListStack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.print();
console.log(stack.pop());
console.log(stack.peek());
stack.print();

