// Question:
// Write a function that takes an
// array of numbers as input and
// returns the sum of all even numbers in the array.


function sumOfEvenNumbers(numbers) {
    let sum = 0;
    
    for (let number of numbers) {
      if (number % 2 === 0) {
        sum += number;
      }
    }
    
    return sum;
  }
  
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = sumOfEvenNumbers(numbersArray);
  console.log(result); // Output: 30 (2 + 4 + 6 + 8 + 10)
  