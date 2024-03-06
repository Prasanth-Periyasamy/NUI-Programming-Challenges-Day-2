// Array of Multiples
// Get the result of the array in multiples
// For example: [2, 5];
// Result: [2, 4, 6, 8, 10]

const array = [4, 4];

function findArrayOfMultiples(array) {
  const [number, limit] = array;
  if (limit === 0) {
    return [];
  }
  const result = [];
  for (let i = 1; i <= limit; i++) {
    result.push(number * i);
  }
  return result;
}
console.log(findArrayOfMultiples(array));
