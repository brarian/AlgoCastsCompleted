// Write a JavaScript program to converts a specified number
// to an array of digits.

const fn = num => {
  return Array.from(num.toString());
};

console.log(fn(123));
