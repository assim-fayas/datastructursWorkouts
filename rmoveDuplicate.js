// Q)Write a JavaScript function to remove duplicate elements from an array (returning a new array with unique elements).


function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  // Example usage:
  const myArray = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArray = removeDuplicates(myArray);
  console.log(`Array with duplicates removed: ${uniqueArray}`);