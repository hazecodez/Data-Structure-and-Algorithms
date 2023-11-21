class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    //hashing function for hash the key
    hash(key){
        let total = 0;
        for(let i = 0; i< key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size;
    }
    //set key value to hash table
    set(key,value){
        const index = this.hash(key);
        this.table[index] = value;
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,':', this.table[i]);
            }
        }
    }
    get(key){
        const index = this.hash(key)
        console.log(this.table[index]);
    }
    remove(key){
        const index = this.hash(key);
        this.table[index] = undefined;
    }
}
const table = new HashTable(50)
table.set("name","Atomic Habits")
table.set("author" , "James Clear")
table.display()
table.get("name")
table.remove("author")
table.display()