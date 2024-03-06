// Check if the number is in range
// For example: checkInRange([1, 10], 4) // true since 4 is in between 1 and 10
// checkInRange([10, 100], 8) // true false 8 is not in between 10 and 100

const array = [-1, 6];
function findNumber(array, number) {
  if (array.length !== 2) {
    return "Invalid input";
  }
  const [minimum, maximum] = array;
  if (number < minimum) {
    return false;
  } else if (number > maximum) {
    return false;
  } else {
    return true;
  }
}
console.log(findNumber(array, 3));
