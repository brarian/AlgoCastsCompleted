function findThreeLargestNumbers(array) {
  // Write your code here.
  const mergeSort = array => {
    if (array.length <= 1) {
      return array;
    }
    let middle = array[Math.floor(array.length / 2)];
    let left = [];
    let right = [];

    for (let i = 0; i <= array.length; i++) {
      if (array[i] < middle) {
        left.push(array[i]);
      } else if (array[i] > middle) {
        right.push(array[i]);
      }
    }
    return [...mergeSort(left), middle, ...mergeSort(right)];
  };
  return mergeSort(array).slice(-3);
}
