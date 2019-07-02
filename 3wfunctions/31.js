const allButFirst = arr => {
  if (arr.length === 1) {
    return arr;
  } else {
    arr.shift();
    return arr;
  }
};

console.log(allButFirst([1, 2, 3, 4, 5]));
