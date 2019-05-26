//Write a JavaScript program to remove specified elements from the right 
//of a given array of elements.

const sl = (x, arr) => arr.splice(0, x-1);

console.log(sl(3, [1, 2, 3, 4, 5]))