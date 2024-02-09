class Node {
    constructor(data){
        this.data = data;
        this.children = []
    }
    addChild(child) {
        this.children.push(child)
    }
}

class Tree {
    constructor(root) {
        this.root = root;
    }
    BF_Traverse(cb) {
        const queue = [this.root];
        while(queue.length > 0) {
            let node = queue.shift();
            cb(node);
            queue.push(...node.children)
        }
    }
    DF_Traverse(cb) {
        function traverse(node) {
            cb(node);
            node.children.forEach((child)=> traverse(child))
        }
        traverse(this.root)
    }
}

const Tree1 = new Tree(new Node("A"))
const nodeB = new Node("B")
const nodeC = new Node("C")
Tree1.root.addChild(nodeB);
Tree1.root.addChild(nodeC);
nodeB.addChild(new Node("D"))
nodeB.addChild(new Node("E"));
nodeC.addChild(new Node("F"));
nodeC.addChild(new Node("G"))
// Tree1.BF_Traverse((node)=> console.log(node.data))
Tree1.DF_Traverse((node)=> console.log(node.data))