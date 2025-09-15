// Q1. Sum of all natural numbers from 1 to n
// function sumOfAllNaturalNumbers(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
// console.log(sumOfAllNaturalNumbers(5));
// 
// Find the index of the first element in an array that is greater than its next element.
// function findIndex(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return i;
//     }
//   }
//   return -1;
// }

// // Test Cases
// console.log(findIndex([1, 3, 5, 4, 6])); // Output: 2 (5 > 4)
// console.log(findIndex([1, 2, 3, 4, 5])); // Output: -1 (no such element)
// console.log(findIndex([10, 9, 8]));      // Output: 0 (10 > 9)

// Given an array of integers, find the maximum element.
function findMax(arr) {
  if (arr.length === 0) return null; // handle empty array
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// Test Cases
console.log(findMax([3, 7, 2, 9, 5])); // Output: 9
console.log(findMax([-1, -5, -3]));    // Output: -1
console.log(findMax([100]));           // Output: 100