class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }
}

class Tree {
  constructor(rootData) {
    this.root = new Node(rootData);
  }

  traverseDF(callback) {
    function traverse(node) {
      callback(node);
      node.children.forEach((child) => traverse(child));
    }

    traverse(this.root);
  }

  traverseBF(callback) {
    const queue = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();
      callback(node);
      queue.push(...node.children);
    }
  }
}

const myTree = new Tree("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");

myTree.root.addChild(nodeB);
myTree.root.addChild(nodeC);
nodeB.addChild(nodeD);
nodeB.addChild(nodeE);
nodeC.addChild(new Node("F"));
nodeC.addChild(new Node("G"));

console.log("Depth-First Traversal:");
myTree.traverseDF((node) => console.log(node.data));

console.log("\nBreadth-First Traversal:");
myTree.traverseBF((node) => console.log(node.data));
