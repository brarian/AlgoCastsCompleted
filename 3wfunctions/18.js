// binary search
//sort all elements
// find middle element
// is middle element greater or smaller than the middle number
// if greater, take left half
// if smaller, take right half

// continue steps from finding middle  ie recursion

function binarySearch(array, num) {
  let start = array[0];
  let end = array[array.length - 1];
  let middle;
  if (start > end) {
    return -1;
  }
  middle = Math.floor((start + end) / 2);

  if (num == array[mid]) {
    return mid;
  } else if (num < array[num]) {
    return binarySearch(array, start, middle - 1, num);
  } else {
    return binarySearch(array, middle + 1, end, num);
  }
}

console.log(
  binarySearch(
    [1, 2, 3, 4, 5, 6, 7, 8],
    (start = array[0]),
    (end = array[array.length - 1]),
    7
  )
);
