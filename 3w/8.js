//Write a JavaScript program to filter out the specified values from an specified array.
//Return the original array without the filtered values.

function code(arr, ...args) {
  return arr.filter(i => !args.includes(i));
}

console.log(code(['a', 'b', 'c', 'a', 'b', 'c'], "b"));
