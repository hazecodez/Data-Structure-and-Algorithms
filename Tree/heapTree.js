//Binary Heap Tree=================MIN HEAP IMPLEMENTATION=================

class minHeap {
    constructor() {
        this.arr = []
    }
    leftChild(i) {
        return 2 * i + 1;
    }
    rightChild(i) {
        return 2 * i + 2;
    }
    parent(i) {
        return Math.floor( ( i - 1 ) / 2 );
    }
    getMin() {
        return this.arr[0];
    }
    heapifyUp(i) {
        while( i > 0 && this.arr[this.parent(i)] > this.arr[i] ) {
            [this.arr[i], this.arr[this.parent(i)]] = [this.arr[this.parent(i)], this.arr[i]]
            i = this.parent(i);
        }
        return true;
    }
    heapifyDown(i) {
        let left = this.leftChild(i);
        let right = this.rightChild(i);
        let smallest = i;
        if(i < this.arr.length-1 && this.arr[smallest] > this.arr[left]) {
            smallest = left;
        }
        if(i < this.arr.length-1 && this.arr[smallest] > this.arr[right]) {
            smallest = right;
        }
        if( i !== smallest ) {
            [ this.arr[i] , this.arr[smallest] ] = [ this.arr[smallest] , this.arr[i] ]
            this.heapifyDown(smallest)
        }
        return true;
    }
    
    insert(value) {
        this.arr.push(value)
        this.heapifyUp(this.arr.length-1)
    }
    
    remove(value) {
        let index = this.arr.indexOf(value);
        this.arr[index] = this.arr.pop();
        this.heapifyDown(index)
    }
    print() {
        for (let i = 0; i<this.arr.length; i++ ) {
            console.log( this.arr[i] );
        }
    }
}

const MinHeap = new minHeap()
MinHeap.insert(10)
MinHeap.insert(20)
MinHeap.insert(8)
MinHeap.insert(7)
MinHeap.insert(30)
console.log(MinHeap.arr);
MinHeap.remove(8)
MinHeap.insert(1)
console.log(MinHeap.arr);


//==================MAX HEAP IMPLEMENTATION========================

class maxHeap {
    constructor() {
        this.arr = [];
    }
    leftChild( i ) {
        return 2 * i + 1;
    }
    rightChild( i ) {
        return 2 * i + 2;
    }
    parent( i ) {
        return Math.floor( (i - 1) / 2 )
    }
    heapifyUp( i ) {
        let arr = this.arr;
        while(i > 0 && arr[this.parent(i)] < arr[i]){
            let parent = this.parent(i)
            let temp = arr[i];
            arr[i] = arr[parent]
            arr[parent] = temp;
            i = parent;
        }
    }
    heapifyDown( i ) {
        let arr = this.arr;
        let left = this.leftChild(i);
        let right = this.rightChild(i);
        let largest = i;
        if(i < arr.length-1 && arr[largest] < arr[left]) {
            largest = left;
        }
        if(i < arr.length-1 && arr[largest] < arr[right]) {
            largest = right;
        }
        if( largest !== i ) {
            let temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = arr[i]
            this.heapifyDown(largest)
        }
    }
    insert(value) {
        let arr = this.arr;
        arr.push(value);
        if(arr.length-1 !== 0){
            this.heapifyUp(arr.length-1)
        }
    }
    remove(value) {
        let arr = this.arr;
        let index  = arr.indexOf(value)
        if(index === arr.length-1){
            arr.pop()
            return true
        }
        arr[index] = arr.pop()
        this.heapifyDown(index)

    }
}
const heapMax = new maxHeap()
heapMax.insert(12)
heapMax.insert(30)
heapMax.insert(1)
heapMax.insert(100)
heapMax.insert(31)
heapMax.insert(19)
heapMax.insert(71)
heapMax.remove(19)
console.log(heapMax.arr);
