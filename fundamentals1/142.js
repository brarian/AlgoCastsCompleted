//Write a JavaScript program to get the lowest index at which
//value should be inserted into array in order to maintain
//its sort order.

const insertInOrder = (arr, k) => {
  // if k > arr[o]
  // if k < arr[arr.length-1]
  if (k < arr[0]) {
    arr.unshift(k);
    return 0;
  }
  if (k > arr[arr.length - 1]) {
    return arr.length;
  }
  for (let i = 0; i <= arr.length; i++) {
    if (k > arr[i] && k < arr[i + 1]) {
      arr.splice(i + 1, 0, k);
      return i + 1;
    }
  }
};

console.log(insertInOrder([1, 2, 44, 50], 47));
