// q)array that contain natural numbers and 0.replace zero with missing natural number


// let arr = [1, 2, 0, 4, 0, 3, 0, 5];

// // Find the maximum number in the array
// let maxNum = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > maxNum) {
//     maxNum = arr[i];
//   }
// }




var removeDuplicates = function (nums) {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) != nums.lastIndexOf(nums[i])) {
      nums.splice(nums.indexOf(nums[i]), 1)

    } else {
      count++
    }

  }


  return (nums.sort())
};


console.log(removeDuplicates([1, 1, 2]));