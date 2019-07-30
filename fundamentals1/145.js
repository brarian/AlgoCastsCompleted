//Write a JavaScript program to randomize the order of the
//values of an array, returning a new array.

const randomize = arr => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
    return arr;
  }
};

console.log(randomize([15, 12, 32, 47, 54]));
