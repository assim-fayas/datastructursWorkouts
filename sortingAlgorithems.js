// //bubble sort
function bubble(a) {
    len = a.length
    for (i = 0; i < len - 1; i++) {
        for (j = 0; j < len - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                temp = a[j]
                a[j] = a[j + 1]
                a[j + 1] = temp
            }
        }
    }
    return a
}
// // //selection sort
// function selection(arr) {
//     let len = arr.length
//     let minIndex, temp
//     for (let i = 0; i < len; i++) {
//         minIndex = i
//         for (let j = i + 1; j < len; j++) {

//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j
//             }
//         }
//         temp = arr[i]
//         arr[i] = arr[minIndex]
//         arr[minIndex] = temp
//     }
//     return arr
// }

// // //insertion sort

// function insertionsort(arr) {
//     len = arr.length
//     let curr
//     let preIndex
//     for (let i = 1; i < len; i++) {
//         curr = arr[i]
//         preIndex = i - 1
//         while (preIndex >= 0 && arr[preIndex] > curr) {
//             arr[preIndex + 1] = arr[preIndex]
//             preIndex--
//         }
//         arr[preIndex + 1] = curr
//     }
//     return arr

// }
// // console.log(insertionsort([111, 2, 3, 7, 2, 3, 6, 5, 1]));

// //merge sort
// function mergesort(arr) {
//     let length = arr.length
//     if (length < 2) {
//         return arr
//     }
//     let middle = Math.floor(length / 2)

//     let left = arr.slice(0, middle)
//     let right = arr.slice(middle)

//     return merge(mergesort(left), mergesort(right))
// }
// function merge(left, right) {
//     let arr = []
//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             arr.push(left.shift())
//         } else {
//             arr.push(right.shift())
//         }
//     }
//     while (left.length) {
//         arr.push(left.shift())
//     }
//     while (right.length) {
//         arr.push(right.shift())
//     }


//     return arr
// }
// // console.log(mergesort([111, 2, 3, 7, 2, 3, 6, 5, 1]));

//quick sort

function quicksort(arr) {

    if (arr.length < 2) {
        return arr
    }
    let piviot = arr[arr.length - 1]
    let left = []
    let right = []

    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] < piviot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quicksort(left), piviot, ...quicksort(right)]
}
console.log(quicksort([111, 2, 3, 7, 2, 3, 6, 5, 1]));

// function insertionsort(arr) {
//     let length = arr.length
//     let current
//     let preIndex
//     for (let i = 1; i < length; i++) {
//         preIndex = i - 1
//         current = arr[i]
//         while (preIndex >= 0 && arr[preIndex] > current) {
//             arr[preIndex + 1] = arr[preIndex]
//             preIndex--
//         }
//         arr[preIndex + 1] = current
//     }
//     return arr
// }
// console.log(insertionsort([111, 2, 3, 7, 2, 3, 6, 5, 1]));









// ////////////////////////////////////////////////////////////

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");
// class Stack{
//     constructor(){
//         this.items=[]
//     }
//     push(value){
//         this.items.push(value)
//     }
//     pop(){
//         return this.items.pop()
//     }
//     peek(){
//         return this.items[this.items.length-1]
//     }
//     size(){
//         return this.items.length
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
//     print(){
//         console.log(this.items.toString())
//     }
// }
// const stack=new Stack()
// console.log(stack.isEmpty())
// stack.push(1)
// stack.push(12)
// stack.push(14)
// stack.print()
// stack.pop()
// stack.print()
// console.log(stack.size())
// console.log("peeked value",stack.peek())

// class Queue{

//     constructor(){
//         this.items=[]
//     }
//     enqueue(value){
//         this.items.push(value)
//     }
//     dequeue(){
//         return this.items.shift()
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }else{
//             return "ath pora aliyaa"
//         }
//     }
//     print(){
//         console.log(this.items.toString())
//     }
// }

// const queue= new Queue()
// // console.log(queue.peek())
// queue.enqueue(1)
// queue.enqueue(13)
// queue.enqueue(15)
// queue.dequeue()
// console.log(queue.peek())
// queue.print()

// bubble sort

// function BubbleSort(arr) {
//     length = arr.length
//     let temp
//     for (i = 0; i < length - 1; i++) {

//         for (j = 0; j < length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     return arr
// }
// console.log(BubbleSort([1, 222, 3, 44, 0]))

// function insertionSort(arr) {
//     let length = arr.length
//     let curr
//     let preIndex

//     for (i = 1; i < length; i++) {
//         preIndex = i - 1
//         curr = arr[i]
//         while (preIndex >= 0 && arr[preIndex] > curr) {
//             arr[preIndex + 1] = arr[preIndex]
//             preIndex--
//         }
//         arr[preIndex + 1] = curr
//     }
//     return arr
// }
// console.log(insertionSort([1, 222, 3, 44, 0]))

// //selection sort

// function selectionSort(a) {
//     let length = a.length
//     let minindex
//     let temp
//     for (i = 0; i < length; i++) {
//         minindex = i
//         for (j = i + 1; j < length; j++) {
//             if (a[minindex] > a[j]) {
//                 minindex = j
//             }
//         }
//         temp = a[i]
//         a[i] = a[minindex]
//         a[minindex] = temp
//     }
//     return a
// }
// console.log(selectionSort([1, 2, 3, 44, 1, 2, 3]))

// //merge sort
// function mergesort(arr) {
//     let length = arr.length
//     if (length < 2) {
//         return arr
//     }
//     let middle = Math.floor(length / 2)
//     let left = arr.slice(0, middle)
//     let right = arr.slice(middle)
//     return merge(mergesort(left), mergesort(right));

// }
// function merge(left, right) {
//     let a = []
//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             a.push(left.shift())
//         } else {
//             a.push(right.shift())
//         }
//     }
//     while (left.length) {
//         a.push(left.shift())
//     }
//     while (right.length) {
//         a.push(right.shift())
//     }
//     return a
// }
// console.log(mergesort([11, 2, 3, 4, 6, 66]))

// //quick sort
// function quicksort(a) {
//     let length = a.length;
//     if (length < 2) {
//         return a;
//     }
//     let pivot = a[a.length - 1];
//     let right = [];
//     let left = [];

//     for (let i = 0; i < length - 1; i++) {
//         if (a[i] < pivot) {
//             left.push(a[i]);
//         } else {
//             right.push(a[i]);
//         }
//     }
//     return [...quicksort(left), pivot, ...quicksort(right)];
// }
// console.log(quicksort([7, 5, 43, 4, 56]));
