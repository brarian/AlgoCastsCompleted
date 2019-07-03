//Write a JavaScript program to create an object from the
//given key-value pairs.
let arr = [["a", 1], ["b", 2], ["c", 3]];

const fn = n => Object.fromEntries(n);
console.log(fn(arr));
