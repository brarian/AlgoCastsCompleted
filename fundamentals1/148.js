//Write a JavaScript program to hash the input string into a whole number.

const fn = str => {
  return str.hash();
};

String.prototype.hashString = function() {
  let hash = 0;
  if (this.length == 0) {
    return hash;
  }

  for (let i = 0; i < this.length; i++) {
    let char = this.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash;
};

console.log(fn('Brarian'));
