class Stack {
  constructor() {
    this.items = [];
  }
  push(val) {
    return this.items.push(val);
  }
  pop() {
    return this.items.pop();
  }
  print() {
    return this.items;
  }
  peek() {
    return this.items[this.items.length - 1];
  }
}

const stack1 = new Stack();
stack1.push(34);
stack1.push(3);
stack1.push(54);
stack1.push(66);
stack1.pop();
console.log(stack1.print());
console.log(stack1.peek());
