// class Minheap{
//     constructor(array){
//         this.heap=array || []
//         this.buildHeap()

//     }
//     buildHeap(){
//        let startidx=this.parent(this.heap.length-1)
//         for(let i=startidx;i>=0;i--){
//             this.shiftDown(i)
//         }
//     }
//     shiftDown(currentIdx){
//         let endIdx=this.heap.length-1
//        let  leftIdx=this.leftchild(currentIdx)
// while(endIdx>=leftIdx){
// if(leftIdx+1<=endIdx && this.heap[leftIdx+1]<this.heap[leftIdx]){
// leftIdx++
// }
// if(this.heap[leftIdx]<this.heap[currentIdx]){
// [this.heap[leftIdx],this.heap[currentIdx]]=[this.heap[currentIdx],this.heap[leftIdx]]

// currentIdx=leftIdx
// leftIdx=this.leftchild(currentIdx)
// }

// else{
//     break;
// }

// }
//     }
// shiftUp(currentIdx){
//    let  parentIdx=this.parent(currentIdx)
//     while(currentIdx>0 && this.heap[currentIdx]<this.heap[parentIdx]){
//         [this.heap[currentIdx],this.heap[parentIdx]]=[this.heap[parentIdx],this.heap[currentIdx]]
//         currentIdx=parentIdx
//         parentIdx=this.parent(currentIdx)
//     }

// }
// insert(value){
//     this.heap.push(value)
//     this.shiftUp(this.heap.length-1)
// }
// remove(){
//     [this.heap[0],this.heap[this.heap.length-1]]=[this.heap[this.heap.length-1],this.heap[0]]
//     let removevalue=this.heap.pop()
//     this.shiftDown(0)
//     return removevalue
// }
// leftchild(i){
//     return 2*i+1
// }
// rightchild(i){
//     return 2*i+2
// }
// parent(i){
//     return Math.floor((i-1)/2)
// }
// print(){
//     console.log(this.heap);
// }

//     }

//     const minheap=new Minheap()
// minheap.insert(3)
// minheap.insert(2)
// minheap.insert(6)
// minheap.insert(1)
// minheap.insert(8)
// minheap.print()


//bst

// class Node {
//     constructor(value) {
//         this.value = value
//         this.right = null
//         this.left = null
//     }
// }
// class binarysearch {
//     constructor() {
//         this.root = null
//     }
//     isEmpty() {
//         return this.root === null
//     }
//     insert(value) {
//         const Newnode = new Node(value)
//         if (this.isEmpty()) {
//             this.root = Newnode
//         } else {
//             this.insertNode(this.root, Newnode)
//         }
//     }
//     insertNode(root, newNode) {
//         if (newNode.value < root.value) {
//             if (root.left === null) {
//                 root.left = newNode
//             } else {
//                 this.insertNode(root.left, newNode)
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = newNode
//             } else {
//                 this.insertNode(root.right, newNode)
//             }
//         }
//     }
//     search(root, value) {
//         if (!root) {
//             return false
//         } else {
//             if (root.value === value) {
//                 return true
//             } else if (value < root.value) {
//                 return this.search(root.left, value)
//             }
//             else {
//                 return this.search(root.right, value)
//             }
//         }
//     }
//     isBst(root = this.root, minvalue = Number.MIN_SAFE_INTEGER, maxvalue = Number.MAX_SAFE_INTEGER) {
//         if (root === null) {
//             return true
//         }
//         if (root.value < minvalue || root.value > maxvalue) {
//             return false
//         }
//         return this.isBst(root.left, minvalue, root.value - 1) && this.isBst(root.right, root.value + 1, maxvalue)

//     }
//     inorder(root) {
//         if (root) {
//             this.inorder(root.left)
//             console.log(root.value);
//             this.inorder(root.right)
//         }
//     }
//     postorder(root) {
//         if (root) {
//             this.postorder(root.left)
//             console.log(root.value);
//             this.postorder(root.right)
//         }
//     }
//     preorder(root) {
//         if (root) {
//             this.preorder(root.left)
//             console.log(root.value);
//             this.preorder(root.right)
//         }
//     }
//    delete(value){
//     this.root=this.deletenode(this.root,value)
//    }
//    deletenode(root,value){
//     if(root===null){
//         return root
//     }
//     if(value<root.value){
//         root.left=this.deletenode(root.left,value)
//     }else if(value>root.value){
//         root.right=this.deletenode(root.right,value)
//     }else{
//         if(!root.left && !root.right){
//             return null
//         }
//         if(!root.left){
//             return root.right
//         }else if(!root.right){
//             return root.left
//         }
//         rootvalue=this.min(root.right)
//         root.right=this.deletenode(root.right,root.value)
//     }
//     return root
//    }

// }

// const bst = new binarysearch()
// console.log(bst.isEmpty());
// bst.insert(1)
// bst.insert(2)
// bst.insert(16)
// bst.insert(14)
// bst.insert(10)

// console.log(bst.isEmpty());
// console.log(bst.search(bst.root, 20))
// console.log("is bst", bst.isBst());
// bst.inorder(bst.root)
// console.log("ccccccccccccccc");
// bst.delete(10)
// bst.inorder(bst.root)


class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

}
class BinarySearch {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }
    Insert(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (root.right === null) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }
    search(root, value) {
        if (!root) {
            return false
        }
        else{
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
    delete(value){
     this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root===null){
            return root
        }
        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }
        else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)

        }
        return root
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
inorder(root){
    if(root){
    this.inorder(root.left)
    console.log(root.value);
    this.inorder(root.right)
    }
}
isBst(root=this.root,minvalue=Number.MIN_SAFE_INTEGER,maxvalue=Number.MAX_SAFE_INTEGER){
    if(root===null){
        return true
    }if(root.value<minvalue || root.value>maxvalue){
        return false
    }
    return this.isBst(root.left,minvalue,root.value-1) && this.isBst(root.right,root.value+1,root.right)
}

}
const bst = new BinarySearch()
console.log(bst.isEmpty());
bst.Insert(1)
bst.Insert(12)
bst.Insert(3)
bst.Insert(33)
bst.Insert(9)
bst.Insert(2)
bst.Insert(11)
bst.Insert(13)
bst.Insert(17)

console.log(bst.isEmpty());
console.log(bst.search(bst.root,3)); 
bst.delete(3)

bst.inorder(bst.root)
console.log( bst.isBst(bst.root));
 