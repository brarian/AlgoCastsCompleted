const mapThenSum = (arr, val) => {
  return arr.map(i => i + val).reduce((a, b) => a + b);
};

console.log(mapThenSum([1, 2, 3, 4], 1));
