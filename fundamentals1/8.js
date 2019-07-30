//Write a JavaScript program to filter out the specified
//values from an specified array. Return the original array
//without the filtered values.

const fn = (arr, excl) => {
  return arr.filter(i => !excl.includes(i));
};

console.log(fn(['m', 'y', 'd', 'o', 'g', 'y'], ['m', 'y']));
