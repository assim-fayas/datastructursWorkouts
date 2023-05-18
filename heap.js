class MinHeap {
    constructor(array) {
        this.heap = array || [];
        this.buildHeap();
    }

    buildHeap() {
        const startIdx = this.parent(this.heap.length - 1);
        for (let i = startIdx; i >= 0; i--) {
            this.shiftDown(i);
        }
    }

    shiftDown(currentIdx) {
        const endIdx = this.heap.length - 1;
        let childIdx = this.leftChild(currentIdx);

        while (childIdx <= endIdx) {
            if (childIdx + 1 <= endIdx && this.heap[childIdx + 1] < this.heap[childIdx]) {
                childIdx++;
            }

            if (this.heap[childIdx] < this.heap[currentIdx]) {
                [this.heap[childIdx], this.heap[currentIdx]] = [this.heap[currentIdx], this.heap[childIdx]];
                currentIdx = childIdx;
                childIdx = this.leftChild(currentIdx);
            } else {
                break;
            }
        }
    }

    shiftUp(currentIdx) {
        let parentIdx = this.parent(currentIdx);

        while (currentIdx > 0 && this.heap[currentIdx] < this.heap[parentIdx]) {
            [this.heap[currentIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[currentIdx]];
            currentIdx = parentIdx;
            parentIdx = this.parent(currentIdx);
        }
    }

    peek() {
        return this.heap[0];
    }

    remove() {
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
        const valueToRemove = this.heap.pop();
        this.shiftDown(0);
        return valueToRemove;
    }

    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    leftChild(i) {
        return 2 * i + 1;
    }

    rightChild(i) {
        return 2 * i + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    display() {
        console.log(this.heap);
    }
}


const minheap = new MinHeap()
minheap.insert(22)
minheap.insert(1)
minheap.insert(7)
minheap.insert(5)
minheap.insert(24)
minheap.insert(2)
minheap.display()                                       