//Write a JavaScript program to get the highest index at which value should be inserted into array in order to maintain its sort order.

function code(arr) {
  let index = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      index.push(i);
    }
  }
  index.splice(-1, 1);
  return Math.max(...index);
}

console.log(code([1, 2, 5, 6, 9]));
