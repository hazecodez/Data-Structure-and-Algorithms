class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class circularList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }
    append(value) {
        const node = new Node(value)
        if(!this.head) {
            this.head = node;
            node.next = this.head;
            this.tail = node;
        }else {
            this.tail.next = node;
            this.tail = node;
            node.next = this.head;
        }
        this.size++
    }
    display() {
        if(!this.head) {
            console.log('List is empty');
        } else {
            let curr = this.head;
            do {
                console.log(curr.value);
                curr = curr.next;
            } while (curr !== this.head);
        }
    }
}

const list = new circularList()
list.append(10)
list.append(20)
list.display()