// class Node{
//     constructor(value){
//         this.value=value
//         this.right=null
//         this.left=null
//     }
// }
// class BinarySearch{
//     constructor(){
//         this.root=null
//     }
//     isEmpty(){
//         return this.root===null
//     }
//     insert(value){
//         const NewNode= new Node(value)
//         if(this.isEmpty()){
//             this.root=NewNode
//         }else{
//             this.insertNode(this.root,NewNode)
//         }
//     }
//     insertNode(root,node){
//         if(node.value<root.value){
//             if(root.left===null){
//                 root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }
//         else{
//             if(root.right===null){
//                 root.right=node
//         }else{
//             this.insertNode(root.right,node)
//         }
//         }
// }
// search(root,value){
//     if(!root){
//         return false
//     }
//     if(root.value===value){
//         return true
//     }else if(value<root.value){
//         return this.search(root.left,value)
//     }
//     else{
//         return this.search(root.right,value)
//     }

// }

// isBst(root = this.root, minValue = Number.MIN_SAFE_INTEGER, maxValue = Number.MAX_SAFE_INTEGER) {
//     if (root === null) {
//         return true;
//     }
//     if (root.value < minValue || root.value > maxValue) {
//         return false;
//     }
//     return this.isBst(root.left, minValue, root.value - 1) && this.isBst(root.right, root.value + 1, maxValue);
// }
// }

// const bst=new BinarySearch()

// bst.insert(1)
// bst.insert(2)
// bst.insert(6)
// bst.insert(1)
// bst.insert(7)
// console.log(bst.search(bst.root,1))
// console.log(bst.isBst(bst.root))
// console.log(bst.isEmpty());



let arr = [111, 2, 3, 7, 2, 3, 6, 5, 1]

function quickSort(arr) {
    let left = []
    let right = []
    let piviot = arr[arr.length - 1]
    if (arr.length < 2) {
        return arr
    }

    for (let i = 0; i < arr.length - 1; i++) {
        if (piviot < arr[i]) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(right), piviot, ...quickSort(left)]
}
console.log(quickSort(arr));