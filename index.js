// Q1. Sum of all natural numbers from 1 to n
function sumOfAllNaturalNumbers(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumOfAllNaturalNumbers(5));