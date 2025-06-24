//Stack is custom data structure which also known as LIFO.i.e. Stack of plates

//Examples
//Browser history
//Undo operation when typing
//Call stack in javascript runtime

//Stack implementation

class Stack {
  constructor() {
    this.items = []; //to make the items private we need to declare with #items without constructor  
    this.size = 0;
  }

  push(element) {
    this.items.push(element);
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    this.size--;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
    this.size = 0;
  }

  print() {
    return this.items.join(",");
  }
}

const stack = new Stack();

stack.push("A");
console.log(stack.print());
console.log(stack.isEmpty());
stack.push("B");
console.log(stack.size)
console.log(stack.peek());
stack.pop();
console.log(stack.print());
console.log(stack.items);



