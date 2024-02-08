class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    append(value) {
        const node = new Node(value);
        if(this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }
   reverseList(){
    if(this.size < 2) return this.head;
    const reversed = this.reverse(this.head,null);
    this.head.next = null;
    this.tail = this.head;
    this.head = reversed
    return this.head
   }
   reverse(curr,prev) {
    if(!curr) return prev;
    const next = curr.next;
    curr.next = prev
    return this.reverse(next,curr)
   }
    print() {
        if(this.size === 0) return null;
        let curr = this.head;
        let values = ''
        while(curr) {
            values+= `${curr.value}  `;
            curr = curr.next
        }
        console.log(values);
    }
}

const list = new LinkedList()
list.append(10)
list.append(23)
list.append(45)
list.append(65)
list.append(12)
list.print()
list.reverseList()
list.print()