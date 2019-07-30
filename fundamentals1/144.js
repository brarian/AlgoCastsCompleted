//Write a JavaScript program to get an array of elements
//that appear in both arrays.

const both = (arr1, arr2) => {
  return arr1.filter(i => arr2.includes(i));
};

console.log(both([1, 2, 3], [2, 4, 0]));
