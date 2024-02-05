const arr = [1, 2, 3, 4, 5, 6,]

function binarySearch(arr, target) {
    leftindex = 0
    rightindex = arr.length - 1
    while (leftindex < rightindex) {
        let middleIndex = Math.floor((leftindex + rightindex) / 2)
        if (target === arr[middleIndex]) {
            return middleIndex
        }
        if (target < middleIndex) {
            rightindex = middleIndex - 1
        } else {
            leftindex = middleIndex + 1
        }
    }

}

// Linear search to find the index of an element in an array:

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const arrr = [4, 7, 1, 9, 3];
const targett = 9;
const indexx = linearSearch(arrr, target);
if (indexx !== -1) {
    console.log(`Found ${targett} at index ${indexx}`);
} else {
    console.log(`${targett} not found in the array`);
}




// Binary search to find the index of an element in a sorted array:

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

const arr = [1, 3, 4, 7, 9];
const target = 7;
const index = binarySearch(arr, target);
if (index !== -1) {
  console.log(`Found ${target} at index ${index}`);
} else {
  console.log(`${target} not found in the array`);
}




// Binary search to find the first occurrence of an element in a sorted array:

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      result = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return result;
}

const arr = [1, 2, 3, 3, 3, 4, 5, 5, 7, 9];
const target = 3;
const index = binarySearch(arr, target);
if (index !== -1) {
  console.log(`Found ${target} at index ${index}`);
} else {
  console.log(`${target} not found in the array`);
}