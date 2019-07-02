const minimumSwaps = arr => {
  let count = 0;
  // loop through given array
  for (let i = 0; i < arr.length; i++) {
    // find where arr[i] is less than i + 1
    if (arr[i] < arr[i] + 1) {
      for (let j = i + 1; j < arr.length; j++) {
        console.log(arr[j], i + 1);
        if (arr[j] <= i + 1) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          console.log("swap", arr[i], arr[j]);
          count++;
          break;
        }
      }
    }
  }
  console.log(arr);
  return count;
};

minimumSwaps([7, 1, 3, 2, 4, 5, 6]);
