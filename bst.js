// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }
// class Binarysearchtree{
//     constructor(){
//         this.root=null
//     }
//     isEmpty(){
//         return this.root===null
//     }
//     insert(value){
//         const newNode=new Node(value)
//         if(this.isEmpty()){
//             this.root=newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(root,node){
//         if(node.value<root.value){
//             if(root.left===null){
//             root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }
//         else{
//             if(root.right===null){
//                 root.right=node
//             }


//         else{
//             this.insertNode(root.right,node)
//         }
//     }
// }
// search(root,value){
//     if(!root){
//         return false
//     }else{
//         if(root.value===value){
//         return true
//     }
//     else if(value<root.value){
//         return this.search(root.left,value)
//     }else{
//         return this.search(root.right,value)
//     }
// }
// }
// preorder(root){
//     if(root){
//         console.log(root.value)
//         this.preorder(root.left)
//         this.preorder(root.right)
//     }
// }
// }


// const bst=new Binarysearchtree()
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)
// bst.preorder(bst.root)
// console.log(bst.search(bst.root,1))
// console.log(bst.isEmpty())




class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}
class Binarysearchtree {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }
    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }

    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {

            if (root.left === null) {
                root.left = newNode
            } else {
                return this.insertNode(root.left, newNode)
            }
        }
        else {
            if (root.right === null) {
                root.right = newNode
            } else {
                return this.insertNode(root.right, newNode)
            }
        }

    }
    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            }
            else {
                return this.search(root.right, value)
            }
        }
    }
    preorder(root) {
        if (root) {


            console.log(root.value);
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
    inorder(root) {
        if (root) {
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)
        }
    }
    postorder(root) {
        this.inorder(root.left)

        this.inorder(root.right)
        console.log(root.value);
    }
    min(root) {
        if (!root.left) {
            return root.value

        } else {
            return this.min(root.left)
        }
    }
    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }
  
}
const bst = new Binarysearchtree()
// console.log(bst.isEmpty());
bst.insert(3)
bst.insert(5)
bst.insert(4)
bst.insert(2)
bst.insert(1)
// bst.createMinHeap();
bst.createMaxHeap()

// console.log(bst.preorder(bst.root))
// console.log(bst.inorder(bst.root))
// console.log(bst.postorder(bst.root))

//  console.log(bst.search(bst.root,1))
//  console.log(bst.search(bst.root,5))
//  console.log(bst.search(bst.root,6))
//  console.log(bst.search(bst.root,4))
//  console.log(bst.search(bst.root,3))
//  console.log(bst.search(bst.root,1))
//  console.log( bst.min(bst.root));
//  console.log( bst.max(bst.root));
// console.log(bst.isEmpty());

