//queue linked list representation

class QNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class QueueLinkedList {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  size() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }
  enqueue(value) {
    const node = new QNode(value);
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    this.size++;
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    } else if (this.size === 1) {
      this.front = null;
      this.rear = null;
      this.size--;
    } else {
      this.front = this.front.next;
      this.size--;
    }
  }
  print() {
    if (this.isEmpty()) {
      return null;
    } else {
      let curr = this.front;
      let values = "";
      while (curr) {
        values += `${curr.value + " "}`;
        curr = curr.next;
      }
      console.log(values);
    }
  }
}

const list = new QueueLinkedList();
list.enqueue(10);
list.dequeue();
list.enqueue(22);
list.enqueue(88);
list.print();
