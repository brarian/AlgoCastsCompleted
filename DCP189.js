//Given an array of elements, return the length of the longest subarray where all its elements are distinct.
//For example, given the array [5, 1, 3, 5, 2, 3, 4, 1], return 5 as the longest subarray of distinct elements is [5, 2, 3, 4, 1].
const unique = arr => {
  // longest subset
  let max = 0;
  let result = new Map();
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!result.has(arr[i])) {
      result.set(arr[i], i);
    } else {
      i = result.get(arr[i]);
      result.clear();
    }
    console.log(result);
    if (max < result.size) {
      max = result.size;
    }
  }
  return `${Array.from(result)} ${max}`;
};

console.log(unique([5, 1, 3, 5, 2, 3, 4, 1]));
