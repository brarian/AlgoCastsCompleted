const largest = arr => {
  let max = 0;
  for (let i of arr) {
    if (i > max) {
      max = i;
    } else if (max < i) {
      max;
    }
  }
  return max;
};

alert(largest([-5, 7, -6, 1, 0]));
