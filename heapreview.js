// class MinHeap{
//     constructor(array){
//         this.heap=array||[]
//         this.buildheap()
//     }
//     buildheap(){
//         let startIdx=this.parent(this.heap.length-1)
//         for(let i=startIdx;i>=0;i--){
//             this.shiftdown(i)
//         }
        
//     }
//     shiftdown(currentidx){
//         endIndex=this.heap.length-1
//         leftIdx=this.leftchild(currentidx)
//         while (leftIdx<=endIndex) {
//             if(leftIdx+1<=endIndex && this.heap[leftIdx]>this.heap[leftIdx+1]){
//                 leftIdx++
//             }
//             if(this.heap[leftIdx]<this.heap[currentidx]){
//                 [this.heap[leftIdx],this.heap[currentidx]]=[this.heap[currentidx],this.heap[leftIdx]]

//                 currentidx=leftIdx
//                 leftIdx=this.leftchild(currentidx)
//             }
//          else{
//                 break;
//             }
//         }
//     }
//     shiftup(currentIdx){
//        let  parent=this.parent(currentIdx)
//         while (currentIdx >0 && this.heap[currentIdx]<this.heap[parent]) {
//             [this.heap[currentIdx],this.heap[parent]]=[this.heap[parent],this.heap[currentIdx]]

//             currentIdx=parent
//             parent=this.parent(currentIdx)
            
//         }
//     }
//     insert(value){
//         this.heap.push(value)
//         this.shiftup(this.heap.length-1)
//     }
//     delete(){
//         [this.heap[0],this.heap[this.heap.length-1]=this.heap[this.heap.length-1],this.heap[0]]
//         deletevalue=this.heap.pop()
//         this.shiftdown(0)
//         return deletevalue
//     }
//     leftchild(i){
//         return 2*i+1
//     }
//     rightchild(i){
//         return 2*i+2
//     }
//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     print(){
//         console.log(this.heap);
//     }
// }
// const minheap=new MinHeap()
// minheap.insert(1)
// minheap.insert(12)
// minheap.insert(11)
// minheap.insert(10)
// minheap.insert(13)
// minheap.print()
class Minheap{
    constructor(array){
    this.heap=array || []
    this.buildHeap()
}
buildHeap(){
   let startIdx=this.parent(this.heap.length-1)
for(let i=startIdx;i>=0;i--){
    this.shiftDown(i)
}
}
shiftDown(currentIdx){
    let leftIdx=this.leftchild(currentIdx)
   let  endIdx=this.heap.length-1
    while(leftIdx<=endIdx ){
        if(leftIdx+1<=endIdx && this.heap[leftIdx+1]<this.heap[leftIdx]){
            leftIdx++
        }
        if(this.heap[leftIdx]<this.heap[currentIdx]){
            [this.heap[leftIdx],this.heap[currentIdx]]=[this.heap[currentIdx],this.heap[leftIdx]]
            currentIdx=leftIdx
           leftIdx=this.leftchild(currentIdx)
        }
    }
}
shiftUp(currentIdx){
   let parentIdx=this.parent(currentIdx)
    while(currentIdx>=0 && this.heap[parentIdx]>this.heap[currentIdx]){
        [this.heap[currentIdx],this.heap[parentIdx]]=[this.heap[parentIdx],this.heap[currentIdx]]
         currentIdx=parentIdx
         parentIdx=this.parent(currentIdx)
    }
}

insert(value){
    this.heap.push(value)
    this.shiftUp(this.heap.length-1)
}
remove(){
    [this.heap[0],this.heap[this.heap.length-1]]=[this.heap[this.heap.length-1],this.heap[0]]
   let removevalue=this.heap.pop()
    this.shiftDown(0)
    return  removevalue
    
}
leftchild(i){
    return 2*i +1
}
rightchild(i){
    return 2*i +2
}
parent(i){
    return Math.floor((i-1)/2)
}
print(){
    console.log(this.heap);
}
}
const minHeap=new Minheap()

minHeap.insert(1)
minHeap.insert(13)
minHeap.insert(14)
minHeap.insert(0)
minHeap.print()
minHeap.remove()
minHeap.print()