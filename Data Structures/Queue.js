//Just like Stack, Queue is known for its behaviour rather than mathematical model
//It follows FIFO behaviour
//Has two processes. i.e. Enqueue, Dequeue
//Enqueue adds element in rear/tail
//Dequeue remooves element from front/head.
//Examples: Printers printing, CPU task scheduling, Callback queue in Javascript runtime

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());

class OptimizedQueue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear === this.front;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}


const queue2 = new OptimizedQueue();
console.log("Optimized Queue using Object instead of array");

console.log(queue2.isEmpty());
queue2.enqueue(10);
queue2.enqueue(20);
queue2.enqueue(30);
console.log(queue2.size());
queue2.print();
console.log(queue2.dequeue());
console.log(queue2.peek());
queue2.print()