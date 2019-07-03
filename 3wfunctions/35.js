const randomArrayInRange = (a, b, n) => {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  };
  while (n > 0) {
    console.log(arr.random());
    n = n - 1;
  }
};

console.log(randomArrayInRange(1, 15, 6));
