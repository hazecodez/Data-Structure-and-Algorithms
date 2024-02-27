//=================Separate chaining using list=======================

class Node {
    constructor(key,value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}
class HashTable {
    constructor(size) {
        this.size = size;
        this.buckets = new Array(size).fill(null)
    }
    hash(key) {
        let hash = 0;
        for(let i=0;i<key.length;i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }
    insert(key, value) {
        let index = this.hash(key);
        if(!this.buckets[index]) {
            this.buckets[index] = new Node(key,value)
        }else {
            let curr = this.buckets[index]
            while(curr.next) {
                curr = curr.next;
            }
            curr.next = new Node(key, value)
        }
    }
    lookup(key) {
        let index = this.hash(key);
        if(!this.buckets[index]) {
            return null;
        }
        let curr = this.buckets[index];
        while(curr){
            if(curr.key === key) {
                return curr.value
            }
            curr = curr.next;
        }
        return null
    }
    log() {
        return this.buckets
    }
}
const table = new HashTable(5);
// table.insert("name","Hashir");
// table.insert("namee","Rishal");
// table.insert("nameee","kumar");
// table.insert("nameeee","kumaran");
// table.insert("nameeeee","kumari");
// table.insert("school","Anakkara");
// table.insert("Job","Developer")
// table.insert("age",23)
// console.log(table.lookup("Job"))


//===============separate chaining using array=======================

class HashTableArray{
    constructor(size) {
        this.size = size;
        this.buckets = new Array(size).fill(null).map(()=> [])
    }
    hash(key) {
        let hash = 0;
        for(let i=0;i<key.length;i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }
    insert(key,value) {
        let index = this.hash(key);
        this.buckets[index].push({key,value});
    }
    lookup(key) {
        let index = this.hash(key);
        if(!this.buckets[index]) {
            return null;
        }
        for(const pair of this.buckets[index]) {
            if(pair.key === key) {
                return pair.value
            }
        }
        return null;
    }
    delete(key) {
        let index = this.hash(key);
        let bucket = this.buckets[index];
        if(!bucket) return null;
        for(let i=0; i<bucket.length; i++) {
            if(bucket[i].key === key) {
                bucket.splice(i,1)
            }
        }
    }
    log() {
        console.log(this.buckets);
    }
}

const tableA = new HashTableArray(5);
tableA.insert("name","Hashir");
tableA.insert("age",23)
tableA.delete("name")
tableA.log()