// 1.Certainly! Here's a coding question in JavaScript for you:

// Question: Write a function called calculateFactorial that takes
// a positive integer n as input and returns the factorial of n.
// The factorial of a non-negative integer n is the product of all
// positive integers less than or equal to n. For example,
// the factorial of 5 (5!) is 5 * 4 * 3 * 2 * 1 = 120.

// a)
function calculateFactorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
  
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  
  // Test the function
  console.log(calculateFactorial(5)); // Output: 120
  console.log(calculateFactorial(0)); // Output: 1
  console.log(calculateFactorial(1)); // Output: 1
  console.log(calculateFactorial(10)); // Output: 3628800
  