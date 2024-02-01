class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  insert(value, index) {
    if (index > this.size || index < 0) {
      return null;
    } else {
      if (index === 0) {
        this.append(value);
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
  }
  removeFrom(index) {
    if (index > this.size || index < 0) {
      return null;
    } else {
      let removeNode;
      if (index === 0) {
        removeNode = this.head;
        this.head = removeNode.next;
      } else {
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        removeNode = prev.next;
        prev.next = removeNode.next;
      }
      this.size--;
    }
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
    } else {
      let removeNode;
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
  }
  reverse() {
    if (this.isEmpty()) {
      return null;
    }
    let prev = null;
    let curr = this.head;
    let next;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
    this.tail = next;
  }
  print() {
    if (this.isEmpty()) {
      return null;
    } else {
      let curr = this.head;
      let values = "";
      while (curr) {
        values += `${curr.value} `;
        curr = curr.next;
      }
      return values;
    }
  }
}

const list = new LinkedList();
console.log(list.print());
list.append(10);
list.append(20);
list.append(25);
list.prepend(50);
list.insert(100, 3);

console.log(list.print());
list.reverse();
console.log(list.print());
