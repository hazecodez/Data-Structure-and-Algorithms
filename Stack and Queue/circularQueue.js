//Circular queue==================

class CircularQueue {
  constructor(capacity) {
    this.front = -1;
    this.rear = -1;
    this.length = 0;
    this.capacity = capacity;
    this.items = new Array(capacity);
  }
  isEmpty() {
    return this.length === 0;
  }
  isFull() {
    return this.capacity === this.length;
  }
  enqueue(value) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.length] = value;
      console.log(this.length);
      this.length++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    } else {
      console.log("Queue is full");
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.length--;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
  }
  print() {
    for (let i = this.front; i < this.length; i++) {
      console.log(this.items[i]);
    }
  }
}
const circularQueue = new CircularQueue(3);
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);

circularQueue.dequeue();
circularQueue.enqueue(45);

circularQueue.print();