class Stack{
    constructor(){
        this.items=[]
    }
    push(value){
this.items.push(value)
    }

    print(){
        console.log(this.items.toString())
    }

    pop(){
       return  this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    shift(){
        return this.items.shift()
    }
    peekk(){
        return this.items[0]
    }
}

const stack=new Stack()
stack.push(1)
stack.push(3)
stack.push(2)
stack.push(5)
stack.pop()
stack.shift()
  console.log(stack.peekk()); 

stack.print()

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Stack {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }

    push(value) {
        const node = new Node(value)
        if (this.isEmpty()) {

            this.head = node
            this.size++
        }
        else{
            node.next=this.head
            this.head=node
            this.size++
        }
    }
    pop() {
        if (this.isEmpty()) {

            return null;
          }
          const value = this.head.value;
          this.head = this.head.next;
          this.size--;
          return value;
    }
    print() {
        let listvalues = ""
        let curr = this.head

        while (curr) {
            listvalues += `${curr.value} `
            curr=curr.next
        }
        console.log(listvalues);
    }
}
const stack = new Stack()
stack.push(1)
stack.push(12)
stack.push(13)
stack.push(15)
stack.print()