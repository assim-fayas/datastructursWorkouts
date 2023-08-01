function findMissingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    const missingNumber = expectedSum - actualSum;
    return missingNumber;
}


console.log(findMissingNumber([1, 2, 3, 5])); // Output: 4
console.log(findMissingNumber([10, 7, 3, 2, 4, 6, 1, 9, 8])); // Output: 5
console.log(findMissingNumber([1, 3, 4, 5, 6])); // Output: 2
