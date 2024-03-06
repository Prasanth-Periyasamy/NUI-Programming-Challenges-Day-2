// Convert to minutes
// Users can give a time like 2:30 (which means 2 hours 30 minutes). Write a function to convert this 2:30 to 150 minutes
// Try with different hours and minutes and cover all possible negative cases

function findTotalMinutes(time) {
  if (!time) return 0;
  const [hours, minutes] = time.split(":").map(Number);
  if ((hours >= 24 && minutes > 0) || hours > 24) {
    throw new Error("Invalid Time");
  }
  const totalMinutes = hours * 60 + minutes;
  return totalMinutes;
}
console.log(findTotalMinutes("24:10"));
