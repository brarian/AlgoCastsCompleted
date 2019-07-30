//Write a JavaScript program to get a random
//element from an array

const fn = arr => {
  return arr.random();
};

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};

console.log(fn([1, 2, 3, 4]));
