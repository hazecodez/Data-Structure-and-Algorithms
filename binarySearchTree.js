class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    isEmpty(){
        return this.root === null;
    }

    //insert node to the tree
    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node;
        }else{
            this.insertNode(this.root, node)
        }
    }
    insertNode(root,node){
        if(root.value > node.value){
            if(root.left === null){
                root.left = node;
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right = node;
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    //search the given node if it's in tree or not.
    search(root,value){
        if(!root){
            return false
        } else {
            if(root.value === value){
                return true
            }else if(value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
    //find closest value
    closest(target){
        let current = this.root;
        let closest = current.value;
        while(current != null){
            if(Math.abs(target-closest) > Math.abs(target - current.value)){
                closest = current.value;
            }
            if(target < current.value){
                current = current.left;
            }else if(target > current.value){
                current = current.right;
            }else{
                break
            }
        }
        return closest;
    }

    //==================Depth First Search ======================

    //preOrder traversal (root -> left -> right)
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }else{
            console.log('Tree is empty');
        }
    }
    //inOrder traversal (left -> root -> right)
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    //postOrder traversal (left -> right -> root)
    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    //============Breadth First Search==================
    levelOrder(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let current = queue.shift()
            console.log(current.value);
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
    }

    //minimum value
    minValue(root){
        if(!root.left){
            return root.value
        }else{
            return this.minValue(root.left)
        }
    }
    //maximum value
    maxValue(root){
        if(!root.right){
            return root.value
        }else{
            return this.maxValue(root.right)
        }
    }

    //delete a given node
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root === null){
            return root
        }else{
            if(value > root.value){
                root.right = this.deleteNode(root.right,value)
            }else if(value < root.value){
                root.left = this.deleteNode(root.left, value)
            }else{
                if(!root.left && !root.right){
                    return null
                }else{
                    if(!root.left){
                        return root.right;
                    }else if(!root.right){
                        return root.left;
                    }else{
                        root.value = this.minValue(root.right)
                        root.right = this.deleteNode(root.right, root.value)
                    }
                }
            }
        }
        return root
    }

}
const bst = new BinarySearchTree()

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(7);
bst.insert(3)

bst.delete(15)
bst.levelOrder(bst.root)
// bst.levelOrder()
// console.log(bst.minValue(bst.root));
// console.log(bst.maxValue(bst.root));