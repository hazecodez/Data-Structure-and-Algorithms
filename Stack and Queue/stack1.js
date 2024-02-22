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


class objStack {
  constructor(){
    this.stack = {};
    this.size = 0
  }
  push(elem) {
    this.stack[this.size] = elem;
    this.size++
  }
  pop() {
    this.size--;
    delete this.stack[this.size]
  }
  print() {
    console.log(Object.values(this.stack));
  }
}

const obj = new objStack();
obj.push(2);
obj.push(4);
obj.push(6)
obj.pop()
obj.print()