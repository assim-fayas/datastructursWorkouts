class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Linkedlist {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size == 0
    }
    getSize() {
        return this.size
    }
    preppend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node

        }
        this.size++

    }
    deleteValue(value) {
        if (this.isEmpty()) {
            return -1;
        }
        let remove
        if (this.head.value == value) {
            removednode=this.head
            this.head = this.head.next
            removednode=null
            this.size--

        } else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            remove = prev.next
            prev.next = remove.next
            this.size--
        }
        return remove
    }
    deleteIndex(index) {
        if (index < 0 || index >= this.size) {
            return
        }
        let remove
        if (index === 0) {
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            remove = prev.next
            prev.next = remove.next

        }
        this.size--
        return remove
    }
    insert(value, index) {
        if (index < 0 || index >= this.size) {
            return -1
        }
        const node = new Node(value)

        if (index == 0) {
            node.next = this.head
            this.head = node
            this.size++
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }

            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
    // duplicate(){
    //     let remove
    //     if(this.isEmpty()){
    //         return null
    //     }
    //     else{
    //         let curr=this.head
    //         while(curr){
    //             if(curr.value==curr.next.value){
    //               remove=curr.next
    //               curr.next=remove.next
    //               this.size--
    //             }
    //             curr=curr.next
    //         }
    //     }

    // }
    // 1,2,3,4,5,
    duplicate() {
        let curr = this.head

        while (curr){
            if (curr.value == curr.next.value) {

                curr.next = curr.next.next
                this.size--

            }
        curr = curr.next
    }
}
    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let Next = curr.next
            curr.next = prev
            prev = curr
            curr = Next
        }
        this.head = prev
    }


    print() {
        if (this.isEmpty()) {
            console.log("the list is empty")
        } else {
            let listvalues = ""
            let curr = this.head
            while (curr) {
                listvalues += `${curr.value} `
                curr = curr.next
            }
            console.log(listvalues)
        }
    }
}

const list = new Linkedlist()
list.append(0)
list.append(1)
list.append(1)
list.append(2)
list.append(2)

list.duplicate()
list.deleteValue(789)
list.reverse()
list.print()
console.log("The size of the list is ", list.getSize());