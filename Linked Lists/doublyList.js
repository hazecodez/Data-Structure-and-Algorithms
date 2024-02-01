class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyList{
    constructor () {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    append(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++
    }
    prepend(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }
    print(){
        if(this.isEmpty()) {
            return null;
        }
        let prev = this.head;
        let values = ''
        while(prev) {
            values += `${prev.value} `
            prev = prev.next;
        }
        return values
    }
    reversePrint() {
        if(this.isEmpty()) {
            return null;
        }
        let prev = this.tail;
        let values = ''
        while(prev) {
            values+= `${prev.value} `
            prev = prev.prev;
        }
        return values
    }
}

const list = new DoublyList()
list.append(10)
list.append(20)
list.prepend(5)
console.log(list.print());
console.log(list.reversePrint());