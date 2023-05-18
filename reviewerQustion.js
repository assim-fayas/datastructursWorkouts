// Convert binary to decimal using queue

// i / p:
// Binary = “1011”

// o / p:
// 		Decimal of(1011) = 11

// Hint: 

// = (1 x 2 ^ 3 ) + (0 x 2 ^ 2 ) + (1 x 2 ^ 1 ) + (1 x 2 ^ 0 ) 
// = 8 + 0 + 2 + 1 
//             = 11
class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(value) {
      this.items.push(value);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    print() {
      let binary = this.items.join("");
      let decimal = 0;
      let multiplier = 1;
      while (binary.length > 0) {
        let binaryDigit = parseInt(binary[binary.length - 1]);
        decimal += binaryDigit * multiplier;
        multiplier *= 2;
        binary = binary.slice(0, -1);
      }
      console.log(`Decimal of (${this.items.join("")}) = ${decimal}`);
    }
  }
  


  const queuee = new Queue();
  queuee.enqueue(1);
  queuee.enqueue(1);
  queuee.enqueue(1);
  queuee.enqueue(1);
  queuee.print(); 
  
  


// remove the repeated element from this queue


  class Qqueue {
    constructor() {
      this.items = [];
    }
  
    enqueue(value) {
      this.items.push(value);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    print() {
      console.log(this.items.toString());
    }
  
    removeDuplicates() {
      const seen = {};
      const uniqueItems = [];
  
      for (let i = 0; i < this.items.length; i++) {
        const currentItem = this.items[i];
  
        if (!seen[currentItem]) {
          seen[currentItem] = true;
          uniqueItems.push(currentItem);
        }
      }
  console.log(seen)
      this.items = uniqueItems;
    }
  }
  
  const queue = new Qqueue();
  queue.enqueue("a");
  queue.enqueue("o");
  queue.enqueue("a");
  queue.enqueue("c");
  
  queue.print(); // Output: a,o,a,c
  
  queue.removeDuplicates();
  
  queue.print(); // Output: a,o,c
  

  