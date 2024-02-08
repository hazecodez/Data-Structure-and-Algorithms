class circularQueue {
  constructor(capacity) {
    this.front = -1;
    this.rear = -1;
    this.size = 0;
    this.capacity = capacity;
    this.items = new Array(capacity);
  }
  enqueue(val) {
    if (this.size === this.capacity) return console.log("Queue is full");
    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = val;
    this.size++;
    if (this.front === -1) this.front = this.rear;
  }
  dequeue() {
    if (this.size === 0) return console.log("Empty queue");
    else {
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.size--;
      if (this.size === 0) {
        this.front = -1;
        this.rear = -1;
      }
    }
  }
  print() {
    if (this.size === 0) return console.log("Empty queutfte");
    for (let i = this.front; i < this.size; i++) {
      console.log(this.items[i]);
    }
  }
}

const cirQueue = new circularQueue(5);

cirQueue.enqueue(34);
cirQueue.enqueue(65);
cirQueue.enqueue(78);
cirQueue.enqueue(89);
cirQueue.enqueue(76);
cirQueue.dequeue();
cirQueue.enqueue(90);
cirQueue.print();
