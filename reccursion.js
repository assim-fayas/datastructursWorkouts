
// factorial



function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const n = 5;
console.log(`Factorial of ${n} is ${factorial(n)}`);



// Finding the nth Fibonacci number:

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

const n = 6;
console.log(`The ${n}th Fibonacci number is ${fibonacci(n)}`);




// Reversing a string using recursion:

function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

const str = "hello";
console.log(`Reverse of "${str}" is "${reverseString(str)}"`);