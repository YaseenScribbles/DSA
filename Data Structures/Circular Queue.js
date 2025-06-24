//Circular Queue is the extension of Queue but has fixed memory and first element is connected to last element
//Circular buffer or Ring buffer
//Will reuse the empty block during dequeue
//Few examples: Clock, Streaming data and traffic lights

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.front = 0;
    this.rear = 0;
    this.capacity = capacity;
    this.size = 0;
  }

  enqueue(element) {
    if (this.isFull()) {
      console.log("Queue is full");
      return false;
    }

    this.items[this.rear] = element;
    this.rear = (this.rear + 1) % this.capacity;
    this.size++;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }

    const item = this.items[this.front];
    this.items[this.front] = undefined;
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return item;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    const result = [];
    for (let i = 0; i < this.size; i++) {
      result.push(this.items[(this.front + i) % this.capacity]);
    }
    console.log(result.join(" <- "));
  }
}

const queue = new CircularQueue(3);
console.log(queue.isEmpty());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.size);
console.log(queue.isFull());
queue.print();
queue.enqueue(4);
queue.dequeue();
queue.enqueue(4);
queue.print();
