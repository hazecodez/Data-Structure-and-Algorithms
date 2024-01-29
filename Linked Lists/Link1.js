class Node {
    constructor(value){
        this.value= value;
        this.next = null;
        this.prev = null;
    }
  }
  class Linked {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0
    }
  
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            return null
        }else{
            let curr = this.head;
            let values = ''
            while(curr){
                values += `${curr.value}`
                curr = curr.next
            }
            console.log(values)
        }
    }
        
        
  }
  
  const list = new Linked
  list.append(8)
  list.append(5)
  list.append(2)
  list.append(1)
  list.print()
  