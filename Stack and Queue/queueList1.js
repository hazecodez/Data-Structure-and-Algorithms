class QNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class QueueList {
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    enqueue (val) {
        const node = new QNode(val)
        if(this.size === 0){
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
        this.size++
    }
    dequeue() {
        if(this.size === 0) return null;
        if(this.size < 2) {
            this.front = null;
            this.rear = null
        }else {
            this.front = this.front.next;
        }
        this.size--
    }
    print() {
        if(this.size === 0) return null;
        let curr = this.front;
        while(curr) {
            console.log(curr.value);
            curr = curr.next
        }
    }
}

const queueList = new QueueList()
queueList.enqueue(4)
queueList.enqueue(54)
queueList.enqueue(65)
queueList.enqueue(23)
queueList.enqueue(98)
queueList.dequeue()
queueList.print()