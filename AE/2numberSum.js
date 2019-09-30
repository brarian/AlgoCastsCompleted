function twoNumberSum(array, targetSum) {
  let map = new Set();
  for (i of array) {
    if (map.has(targetSum - i)) {
      let a = targetSum - i;
      let b = i;

      if (a > b) {
        return [b, a];
      }
      return [a, b];
    }
    map.add(i);
  }
  return [];
}
