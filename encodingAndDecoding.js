// Encoder and Decoder
// Encode a string in such a way that the output will be the next characters given as input
// For example:
// encode(“arun”, 2)  -> ctwp
// encode(“arun”, 4) -> evyr
// And similarly decode will return the opposite
// decode(“ctwp”, 2) -> arun
// decode(“evyr”, 4) -> arun

// Encoding
function findEncodedString(string, number) {
  if (number < 1 || string.length === 0) {
    return string;
  }
  const array = string.split("");
  let encodedString = "";
  for (let i = 0; i < array.length; i++) {
    let encodedCharcode = string.charCodeAt(i) + number;
    const encodedLetter = String.fromCharCode(encodedCharcode);
    encodedString += encodedLetter;
  }
  return encodedString;
}
console.log(findEncodedString("arun", 4));

function findDecodedString(string, number) {
  if (number < 1) {
    return string;
  }
  const array = string.split("");
  let decodedString = "";
  for (let i = 0; i < array.length; i++) {
    let decodedCharCode = string.charCodeAt(i) - number;
    const decodedLetter = String.fromCharCode(decodedCharCode);
    decodedString += decodedLetter;
  }
  return decodedString;
}
console.log(findDecodedString("ctwp", 2));
