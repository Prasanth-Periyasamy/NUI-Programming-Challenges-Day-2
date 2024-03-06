// Template String Replace
// For example:
// const string = “Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]“;
// replaceTemplateString(string, [[“location”, “Chennai”], [“state”, “Tamil Nadu”], [“phone”, “9840164723"]])
// Output: Numentica is a company focused on delivering high quality code. It is located in Chennai Tamil Nadu 9840164723

const inputString =
  "Numentica is a company focused on delivering high quality code. It is located in location state country phone";
const array = [
  ["state", ""],
  ["location", "Chennai"],
  ["phone", "9840164723"],
  ["country", "India"],
];
function replaceTemplateString(inputString, array) {
  let modifiedString = inputString;
  for (let i = 0; i < array.length; i++) {
    const [key, value] = array[i];
    if (key && value) {
      const regex = new RegExp(`${key}`, "ig");
      modifiedString = modifiedString.replace(regex, value);
    }
  }
  return modifiedString;
}
console.log(replaceTemplateString(inputString, array));
