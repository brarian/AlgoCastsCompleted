var findDuplicate = function(nums) {
  let map = new Set();
  for (let i of nums) {
    if (!map.has(i)) {
      map.add(i);
    } else if (map.has(i)) {
      return i;
    }
  }
};
