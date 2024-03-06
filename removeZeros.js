// Remove zeros either trailing / leading
// Input - "000000123423423000"
// removeZeros(input, "leading") output 123423423000
// removeZeros(input, "trailing")  output 000000123423423

const string = "a0101000";

function removeZeros(string, type) {
  if (type === "leading") {
    const array = string.toString().split("");
    const result = [...array];
    for (let i = 0; i < array.length; i++) {
      if (array[i] === "0") {
        result.shift();
      } else {
        break;
      }
    }
    return result.join("");
  } else if (type === "trailing") {
    const array = string.toString().split("");
    const result = [...array];
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] === "0") {
        result.pop();
      } else {
        break;
      }
    }
    return result.join("");
  }
}
console.log(removeZeros(string, "leading"));
