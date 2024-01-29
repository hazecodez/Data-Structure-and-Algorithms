//=========array [push,pop,peek,print,size,isEmpty]
class Stack{
    constructor(){
        this.items = [];
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        console.log(this.items[this.items.length-1]);
    }
    print(){
        console.log(this.items);
    }
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length;
    }
}

//reverse string

function reverse(str){
    str = str.split('')
    let n = str.length
    const strStack = new Stack()
    for(let i=0;i<n;i++){
        strStack.push(str[i])
    }
    for(let j=0;j<n;j++){
        str[j] = strStack.pop() 
    }
    return str.join('')
}

//middle value deletion
const midDele = new Stack()
function middleDeletion(){
    midDele.push(1)
    midDele.push(2)
    midDele.push(3)
    midDele.push(4)
    midDele.push(5)
    let mid = Math.floor(midDele.size()/2)
    let arr = []
    for(let i=0;i<mid;i++){
       arr[i]=midDele.pop() 
    }
    midDele.pop()
    for(let j=arr.length-1;j>=0;j--){
        midDele.push(arr[j])
    }
    midDele.print()
}

//stack object
class StackObject {
    constructor(){
        this.items = {}
        this.head = 0
    }
    push(ele){
        this.items[this.head] = ele;
        this.head++
    }
    print(){
        console.log(this.items);
    }
}
const object = new StackObject()
object.push('Hashir')
object.push('Alan')
object.print()