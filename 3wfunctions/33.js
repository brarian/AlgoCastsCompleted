const randomInRange = (a, b) => {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr.random();
};

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};

console.log(randomInRange(2, 10));
