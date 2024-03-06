// Find the missing number / numbers
// Example: Given an array of numbers in random order, find the missing numbers
// [7, 10, 12, 9] // output [8, 11] since these are the numbers missing in 7, 9, 10, 12
// Note: The numbers will be given as input in any order.

const array = [7, 10, 9];

function findMissingNumbers(array) {
  const missingNumbersArray = [];
  const maxNumber = Math.max(...array);
  const minNumber = Math.min(...array);
  if (
    maxNumber === minNumber ||
    array.length < 2 ||
    maxNumber === minNumber + 1
  ) {
    return missingNumbersArray;
  }
  for (let i = minNumber; i <= maxNumber; i++) {
    if (!array.includes(i)) {
      missingNumbersArray.push(i);
    }
  }
  return missingNumbersArray;
}
console.log(findMissingNumbers(array));
