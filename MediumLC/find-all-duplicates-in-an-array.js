var findDuplicates = function(nums) {
  let map = {};

  nums.forEach(a => {
    if (!map[a]) {
      map[a] = 1;
    } else {
      map[a]++;
    }
  });
  //  return map
  return Object.keys(map)
    .filter(index => map[index] == 2)
    .map(i => Number(i));
};
