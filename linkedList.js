
// //linkedlist implementation without tail

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }
// class Linkedlist {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }
//     isEmpty() {
//         return this.size == 0
//     }
//     getSize() {
//         return this.size
//     }
//     preppend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             let prev = this.head
//             while (prev.next) {
//                 prev = prev.next
//             }
//             prev.next = node

//         }
//         this.size++

//     }
//     deleteValue(value) {
//         if (this.isEmpty()) {
//             return -1;
//         }
//         let remove
//         if (this.head.value == value) {
//             removednode = this.head
//             this.head = this.head.next
//             removednode = null
//             this.size--

//         } else {
//             let prev = this.head
//             while (prev.next && prev.next.value !== value) {
//                 prev = prev.next
//             }
//             remove = prev.next
//             prev.next = remove.next
//             this.size--
//         }
//         return remove
//     }
//     deleteIndex(index) {
//         if (index < 0 || index >= this.size) {
//             return
//         }
//         let remove
//         if (index === 0) {
//             this.head = this.head.next
//         } else {
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             remove = prev.next
//             prev.next = remove.next

//         }
//         this.size--
//         return remove
//     }
//     insert(value, index) {
//         if (index < 0 || index >= this.size) {
//             return -1
//         }
//         const node = new Node(value)

//         if (index == 0) {
//             node.next = this.head
//             this.head = node
//             this.size++
//         } else {
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }

//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }
//     // duplicate(){
//     //     let remove
//     //     if(this.isEmpty()){
//     //         return null
//     //     }
//     //     else{
//     //         let curr=this.head
//     //         while(curr){
//     //             if(curr.value==curr.next.value){
//     //               remove=curr.next
//     //               curr.next=remove.next
//     //               this.size--
//     //             }
//     //             curr=curr.next
//     //         }
//     //     }

//     // }
//     // 1,2,3,4,5,
//     duplicate() {
//         let curr = this.head

//         while (curr) {
//             if (curr.value == curr.next.value) {

//                 curr.next = curr.next.next
//                 this.size--

//             }
//             curr = curr.next
//         }
//     }
//     reverse() {
//         let prev = null
//         let curr = this.head
//         while (curr) {
//             let Next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = Next
//         }
//         this.head = prev
//     }


//     print() {
//         if (this.isEmpty()) {
//             console.log("the list is empty")
//         } else {
//             let listvalues = ""
//             let curr = this.head
//             while (curr) {
//                 listvalues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listvalues)
//         }
//     }
// }

// const list = new Linkedlist()
// list.append(0)
// list.append(1)
// list.append(1)
// list.append(2)
// list.append(2)

// list.duplicate()
// list.deleteValue(789)
// list.reverse()
// list.print()
// console.log("The size of the list is ", list.getSize());





// linked list with tail implementation



class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    prepend(value) {
        const node = new Node(value)
        if (this.head == null) {

            this.head = node
            this.tail = node
        } else {

            node.next = this.head
            this.head = node

        }

        this.size++
    }

    append(value) {

        if (this.head == null) {
            this.prepend(value)
        } else {
            let node = new Node(value)
            this.tail.next = node
            this.tail = node
            this.size++
        }
    }

    insertValueAt(index, value) {

        if (index == 0) {
            this.prepend(value)
            return
        } else if (index == this.size) {
            this.append(value)
            return
        } else {
            const node = new Node(value)
            let curr = this.head
            let prev = null
            let currsize = 0
            while (currsize < index) {
                prev = curr

                curr = curr.next

                currsize++
            }


            node.next = curr
            prev.next = node
        }
        this.size++

    }
    insertValueAfter(value, insertvalue) {
        if (this.tail == value) {
            this.append(value)
            return
        } else {
            let curr = this.head
            let nex = this.head.next
            while (curr.value != value) {

                curr = curr.next
                nex = curr.next

            }
            const node = new Node(insertvalue)
            node.next = nex
            curr.next = node

        }
        this.size++
    }
    insertValueBefore(value, insertValue) {
        if (this.size <= 1) {
            this.prepend(insertValue)
            return
        } else {
            let prev = null
            let curr = this.head
            while (curr.value != value) {
                prev = curr
                curr = curr.next
            }
            const node = new Node(insertValue)
            node.next = curr
            prev.next = node

        }
        this.size++
    }

    deleteByIndex(index) {
        if (index <= 0) {
            console.log('linked list is empty')
        } else if (index == 0) {
            this.head = this.head.next


        } else if (index == this.size - 1) {
            let curr = this.head
            let prev = null

            while (curr.next) {
                prev = curr
                curr = curr.next
            }
            prev.next = null
            this.tail = prev
        } else {

            let curr = this.head
            let prev = null
            let idx = 0
            while (idx < index) {
                prev = curr
                curr = curr.next
                idx++
            }
            prev.next = curr.next
            curr.next = null
        }
        this.size--
    }
    deleteByValue(value) {
        if (value == this.head.value) {
            this.head = this.head.next
        } else if (value == this.tail.value) {
            let curr = this.head
            let prev = null
            while (curr.value != value) {
                prev = curr
                curr = curr.next
            }
            prev.next = curr.next
            this.tail = prev

        } else {
            let curr = this.head
            let prev = null
            while (curr.value != value) {
                prev = curr
                curr = curr.next
            }

            prev.next = curr.next
            curr = null


        }
        this.size--
    }
    reverse() {

        let curr = this.head
        let prev = null
        while (curr) {
            let Next = curr.next
            curr.next = prev
            if (curr.next == null) {
                this.tail = curr
            }
            prev = curr
            curr = Next

        }
        this.head = prev



    }



    print() {

        if (this.size == 0) {
            console.log("The Linked List is Empty please add the value")
            return
        }


        let curr = this.head

        while (curr) {
            console.log(curr.value)
            curr = curr.next

        }

    }

}

const list = new LinkedList()
list.append(1)
list.append(3)
list.append(5)
list.append(0)
list.append(1)
list.append(8)
list.append(10)
list.append(11)
// list.insertValueAfter(10,10)
// list.insertValueBefore(8,88)
// list.insertValueAt(4,4)
list.deleteByIndex(3)
// list.deleteByValue(10)
list.print()
