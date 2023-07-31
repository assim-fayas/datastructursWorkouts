function containsEvenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            return true;
        }
    }
    return false;
}

// Test cases
console.log(containsEvenNumbers([1, 3, 5, 7])); // Output: false
console.log(containsEvenNumbers([2, 4, 6, 8, 9])); // Output: true
console.log(containsEvenNumbers([])); // Output: false
