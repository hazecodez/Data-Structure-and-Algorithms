class trieNode {
    constructor() {
        this.children = new Map();
        this.wordEnd = false;
    }
}

class trieTree {
    constructor() {
        this.root = new trieNode()
    }
    
    insert(word) {
        let current = this.root;
        for(let i=0; i < word.length;i++) {
            const ch = word.charAt(i)
            if(!current.children.has(ch)) {
                current.children.set(ch, new trieNode())
            }
            current = current.children.get(ch)            
        }
        current.wordEnd = true;
    } 
    
    search(word) {
        let current = this.root;
        for(let i=0; i < word.length; i++){
            const ch = word.charAt(i)
            if(!current.children.has(ch)) {
                return false;
            }
            current = current.children.get(ch);
            
        }
        return current.wordEnd;
    }
    remove(word) {
        return this.removeNode(this.root, word , 0)
    }
    removeNode(node, word, depth) {
        if(!node) {
            return null;
        }
        if(depth === word.length) {
            node.wordEnd = false;
        } else {
            const ch = word.charAt(depth);
            const childNode = node.children.get(ch);
            const newChild = this.removeNode(childNode, word, depth+1)
            if(!newChild || (!newChild.wordEnd && newChild.children.size === 0)) {
                node.children.delete(ch)
            }
        }
    }
}
const tries = new trieTree()
tries.insert('hello')
tries.insert('hashir')
// tries.remove('hashir')

console.log(tries.search('hashir'));
