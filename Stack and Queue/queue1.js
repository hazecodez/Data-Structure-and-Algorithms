class Queue {
    constructor() {
        this.items = []
    }
    enqueue(val) {
        return this.items.push(val)
    }
    dequeue() {
        return this.items.shift()
    }
    print() {
        return this.items
    }
}

const queue1 = new Queue()
// queue1.enqueue(43)
// queue1.enqueue(65)
// queue1.enqueue(76)
// queue1.enqueue(232)
// queue1.enqueue(909)
// queue1.dequeue()
// console.log(queue1.print());