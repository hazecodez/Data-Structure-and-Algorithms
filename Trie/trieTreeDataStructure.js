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
    display(){
        return this.displayTrie(this.root , "")
    }
    displayTrie(node , prefix) {
        if(node.wordEnd) {
            console.log(prefix);
        }
        for(const [char,child] of node.children) {
            this.displayTrie(child , prefix + char)
        }
    }

    prefix(word) {
        let current = this.root;
        let curr ='';
        for(let i=0;i<word.length;i++){
            if(!current.children.has(word[i])) {
                return []
            }
            current = current.children.get(word[i])
            curr += word[i]
        }
        let list = [];
        this.suggest(current, list, curr)
        return list;
    }
    suggest(root, list, curr){
        if(root.wordEnd){
            list.push(curr)
        }
        for(let [char,child] of root.children) {
            this.suggest(child, list , curr+char)
        }
    }
}
const tries = new trieTree()
tries.insert('hello')
tries.insert('hashir')
tries.insert('hola')
console.log(tries.prefix('he'));
// tries.remove('hashir')

tries.display()


///========================================

class TrieNode {
    constructor() {
        this.children = new Array(26);
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            const index = word.charCodeAt(i) - 'a'.charCodeAt(0);
            if (!current.children[index]) {
                current.children[index] = new TrieNode();
            }

            current = current.children[index];
        }

        current.isEndOfWord = true;
    }

    search(word) {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            const index = word.charCodeAt(i) - 'a'.charCodeAt(0);

            if (!current.children[index]) {
                return false;
            }

            current = current.children[index];
        }

        return current.isEndOfWord;
    }

    remove(word) {
        this.removeNode(this.root, word, 0);
    }

    removeNode(node, word, depth) {
        if (!node) {
            return null;
        }

        if (depth === word.length) {
            node.isEndOfWord = false;
        } else {
            const index = word.charCodeAt(depth) - 'a'.charCodeAt(0);
            const childNode = node.children[index];
            this.removeNode(childNode, word, depth + 1);

            if (!node.children[index].isEndOfWord && this.isNodeEmpty(node.children[index])) {
                node.children[index] = null;
            }
        }
    }

    isNodeEmpty(node) {
        for (let i = 0; i < node.children.length; i++) {
            if (node.children[i]) {
                return false;
            }
        }
        return true;
    }

    display() {
        this.displayWords(this.root, "");
    }

    displayWords(node, prefix) {
        if (node.isEndOfWord) {
            console.log(prefix);
        }

        for (let i = 0; i < node.children.length; i++) {
            if (node.children[i]) {
                const char = String.fromCharCode('a'.charCodeAt(0) + i);
                this.displayWords(node.children[i], prefix + char);
            }
        }
    }
}


// const trie = new Trie();
// trie.insert('hello');
// trie.insert('hashir');
// trie.insert('world');

// console.log("Search 'hashir':", trie.search('hashir'));
// console.log("Search 'hi':", trie.search('hi'));

// console.log("Words in the trie:");
// trie.display();

// console.log("Removing 'hashir'");
// trie.remove('hashir');

// console.log("Words in the trie after removal:");
// trie.display();

