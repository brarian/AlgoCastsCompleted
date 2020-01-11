var replaceElements = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    let a = arr.slice(i + 1);
    let maxVal = Math.max(...a);
    arr[i] = maxVal;
    if (maxVal === -Infinity) {
      arr[i] = -1;
    }
  }
  return arr;
};
