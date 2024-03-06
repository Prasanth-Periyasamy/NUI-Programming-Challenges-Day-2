// Return the sum of smallest and largest number in an array
// Example: [45, 2, 25, 11, 16]
// Here the output will be 2(smallest) + 45 (largest)
// Output will be 47

const array = [1, 2];
function findSumOfLargestAndSmallest(array) {
  if (array.length === 0) return "Invalid Input";
  const maximumNumber = Math.max(...array);
  const minimumNumber = Math.min(...array);
  const result = maximumNumber + minimumNumber;
  return result;
}
console.log(findSumOfLargestAndSmallest(array));
