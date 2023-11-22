class Queue{
    constructor(){
        this.items = []
    }
    enqueue(value){
        this.items.push(value)
    }
    dequeue(){
        return this.items.shift()
    }
    print(){
        console.log(this.items);
    }
}
const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
queue.dequeue()
queue.print()