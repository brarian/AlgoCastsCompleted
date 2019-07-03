//Write a JavaScript program to create an array of key-value
// pair arrays from an given object.
const arrayOfObjectsToOrder = [
  { name: "Greyson", age: 24 }
  // { name: "Brarian", age: 27 },
  // { name: "Julia", age: 35 }
];

const fn = obj => obj.map(i => Object.entries(i));
console.log(fn(arrayOfObjectsToOrder));
