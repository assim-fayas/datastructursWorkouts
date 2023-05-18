function reverse(arr){
    let len=arr.length
    for(i=0;i<Math.floor(len/2);i++){
     let  temp=arr[i]
      arr[i]=arr[len-1-i]
      arr[len-1-i]=temp
    }
    return arr
}
console.log(reverse([1,2,3,4,5,6]))




// q)array that contain natural numbers and 0.replace zero with missing natural number


let arr = [1, 2, 0, 4, 0, 3, 0, 5];

// Find the maximum number in the array
let maxNum = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxNum) {
    maxNum = arr[i];
  }
}

// Create an array of all natural numbers up to the maximum number
let allNums = [];
for (let i = 1; i <= maxNum; i++) {
  allNums.push(i);
}

// Create an array of the natural numbers present in the array
let presentNums = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    presentNums.push(arr[i]);
  }
}

// Find the array difference between allNums and presentNums to get the missing numbers
let missingNums = [];
for (let i = 0; i < allNums.length; i++) {
  if (!presentNums.includes(allNums[i])) {
    missingNums.push(allNums[i]);
  }
}

// Replace the zeros in the array with the missing numbers
let missingIndex = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    arr[i] = missingNums[missingIndex];
    missingIndex++;
  }
}

console.log(arr);
