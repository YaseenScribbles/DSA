const LinkedList = require("./LinkedListWithTail");

class LinkedListQueue {
    constructor(){
        this.items = new LinkedList()
    }

    enqueue(element){
        this.items.append(element)        
    }

    dequeue(){
        return this.items.removeFromFront()
    }

    peek(){
        return this.items.head.value
    }

    isEmpty(){
        return this.items.isEmpty()
    }

    getSize(){
        return this.items.getSize()
    }

    print(){
        this.items.print()
    }

}

const queue = new LinkedListQueue()

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.peek())
queue.dequeue();
queue.print();