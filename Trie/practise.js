class trieNode {
  constructor() {
    this.children = new Map();
    this.wordEnd = false;
  }
}

class trieTree {
  constructor() {
    this.root = new trieNode();
  }

  insert(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const ch = word.charAt(i);
      if (!curr.children.has(ch)) {
        curr.children.set(ch, new trieNode());
      }
      curr = curr.children.get(ch);
    }
    curr.wordEnd = true;
  }
  search(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const ch = word.charAt(i);
      if (!curr.children.has(ch)) {
        return false;
      }
      curr = curr.children.get(ch);
    }
    return curr.wordEnd;
  }
  remove(word) {
    return this.removeWord(this.root, word, 0);
  }
  removeWord(node, word, depth) {
    if (!node) {
      return null;
    }
    if (depth === word.length) {
      node.wordEnd = false;
    } else {
      const ch = word.charAt(depth);
      let childNode = node.children.get(ch);
      let newChild = this.removeWord(childNode, word, depth + 1);
      if (!newChild || (!newChild.wordEnd && newChild.children.size === 0)) {
        node.children.delete(ch);
      }
    }
  }
  display() {
    return this.displayTrie(this.root, "");
  }
  displayTrie(node, prefix) {
    if (node.wordEnd) console.log(prefix);
    for (const [char, child] of node.children) {
      this.displayTrie(child, prefix + char);
    }
  }
  prefix(word) {
    let current = this.root;
    let curr = "";
    for (let i = 0; i < word.length; i++) {
      if (!current.children.has(word[i])) {
        return [];
      }
      curr += word[i];
      current = current.children.get(word[i]);
    }
    let list = [];
    this.suggest(current, list, curr);
    return list;
  }
  suggest(current, list, curr) {
    if (current.wordEnd) {
      list.push(curr);
    }
    for (const [char, child] of current.children) {
      this.suggest(child, list, curr + char);
    }
  }
}

const tree = new trieTree();
tree.insert("hashir");
tree.insert("sana");
tree.insert("habeeb");

// console.log(tree.search("hashir"));
// tree.display();
console.log(tree.prefix("s"));
