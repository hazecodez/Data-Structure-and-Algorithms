//array representation

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
    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        } return null
    }
    isEmpty(){
        return this.size === 0
    }
    size(){
        return this.items.length
    }
}
const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.print()
// queue.dequeue()
// console.log(queue.peek());

//queue linked list representation

class QNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class QueueLinkedList{
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    size(){
        return this.size;
    }
    isEmpty(){
        return this.size === 0;
    }
    enqueue(value){
        const node = new QNode(value)
        if(this.isEmpty()){
            this.front = node;
            this.rear = node;
        }else{
            this.rear.next = node;
            this.rear = node;
        }
        this.size++
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }else if(this.size === 1){
            this.front = null;
            this.rear = null;
            this.size--;
        }else{
            this.front = this.front.next
            this.size--;
        }
    }
    print(){
        if(this.isEmpty()){
            return null;
        }else{
            let curr = this.front;
            let values = ''
            while(curr){
                values += `${curr.value+" "}`
                curr = curr.next;
            }
            console.log(values);
        }
    }

}    


const list = new QueueLinkedList()
list.enqueue(10)
list.dequeue()
list.enqueue(22)
list.enqueue(88)
list.print()

//Circular queue==================

class CircularQueue{
    constructor(capacity){
        this.front = -1;
        this.rear = -1;
        this.length = 0;
        this.capacity = capacity
        this.items = new Array(capacity)
    }
    isEmpty(){
        return this.length === 0;
    }
    isFull(){
        return this.capacity === this.length;
    }
    enqueue(value){
        if(!this.isFull()){
            this.rear = (this.rear +1) % this.capacity
            this.items[this.rear] = value;
            this.length++
            if(this.front === -1){
                this.front = this.rear;
            }
        }else{
            console.log('Queue is full');
        }
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.length--;
        if(this.isEmpty()){
            this.front = -1;
            this.rear = -1;
        }
    }
    print(){
        for(let i =this.front;i<=this.rear;i++){
            console.log(this.items[i]);
        }
    }
}
const circularQueue = new CircularQueue(3)
circularQueue.enqueue(10)
circularQueue.enqueue(20)
circularQueue.enqueue(30)
circularQueue.enqueue(40)
circularQueue.print()
circularQueue.enqueue(60)
circularQueue.print()


