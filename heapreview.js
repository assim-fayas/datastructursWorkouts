class MinHeap{
    constructor(array){
        this.heap=array||[]
        this.buildheap()
    }
    buildheap(){
        let startIdx=this.parent(this.heap.length-1)
        for(let i=startIdx;i>=0;i--){
            this.shiftdown(i)
        }
        
    }
    shiftdown(currentidx){
        endIndex=this.heap.length-1
        leftIdx=this.leftchild(currentidx)
        while (leftIdx<=endIndex) {
            if(leftIdx+1<=endIndex && this.heap[leftIdx]>this.heap[leftIdx+1]){
                leftIdx++
            }
            if(this.heap[leftIdx]<this.heap[currentidx]){
                [this.heap[leftIdx],this.heap[currentidx]]=[this.heap[currentidx],this.heap[leftIdx]]

                currentidx=leftIdx
                leftIdx=this.leftchild(currentidx)
            }
         else{
                break;
            }
        }
    }
    shiftup(currentIdx){
       let  parent=this.parent(currentIdx)
        while (currentIdx >0 && this.heap[currentIdx]<this.heap[parent]) {
            [this.heap[currentIdx],this.heap[parent]]=[this.heap[parent],this.heap[currentIdx]]

            currentIdx=parent
            parent=this.parent(currentIdx)
            
        }
    }
    insert(value){
        this.heap.push(value)
        this.shiftup(this.heap.length-1)
    }
    delete(){
        [this.heap[0],this.heap[this.heap.length-1]=this.heap[this.heap.length-1],this.heap[0]]
        deletevalue=this.heap.pop()
        this.shiftdown(0)
        return deletevalue
    }
    leftchild(i){
        return 2*i+1
    }
    rightchild(i){
        return 2*i+2
    }
    parent(i){
        return Math.floor((i-1)/2)
    }
    print(){
        console.log(this.heap);
    }
}
const minheap=new MinHeap()
minheap.insert(1)
minheap.insert(12)
minheap.insert(11)
minheap.insert(10)
minheap.insert(13)
minheap.print()