//Binary Heap Tree
class Heap{
    constructor(){
        this.arr = []
    }
    leftChild(i){
        return 2*i+1;
    }
    rightChild(i){
        return 2*i+2
    }
    parent(i){
        return Math.floor((i-1)/2)
    }
    getMin(){
        return this.arr[0];
    }
    insert(value){
        let arr = this.arr;
        arr.push(value);
        let i = arr.length-1;
        while( i > 0 && arr[this.parent(i)] > arr[i]){
            let p = this.parent(i);
            [arr[i],arr[p]] = [arr[p],arr[i]]
            i = p;
        }
    }
    print(){
        for(let i = 0;i<this.arr.length;i++){
            console.log(this.arr[i]);
        }
    }
}

const heap = new Heap()
heap.insert(10)
heap.insert(20)
heap.insert(8)
heap.insert(7)
heap.insert(30)
console.log(heap.parent(3));