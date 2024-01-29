//array representation

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(value) {
    this.items.push(value);
  }
  dequeue() {
    return this.items.shift();
  }
  print() {
    console.log(this.items);
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }
  isEmpty() {
    return this.size === 0;
  }
  size() {
    return this.items.length;
  }
}
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
queue.dequeue();
console.log(queue.peek());
