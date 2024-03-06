// Format phone number
// Convert a ten digit number into US phone formatting
// For example: 9840164723 to "(984)016-473"
// Throw error if it's not a valid phone number

const phoneNumber = 1234567890;
function phoneNumberFormatting(phoneNumber) {
  const stringPhoneNumber = phoneNumber.toString();
  if (stringPhoneNumber.length !== 10)
    throw new Error("Not a valid Phone Number");
  return `(${stringPhoneNumber.slice(0, 3)})${stringPhoneNumber.slice(
    3,
    6
  )}-${stringPhoneNumber.slice(6)}`;
}
console.log(phoneNumberFormatting(phoneNumber));
