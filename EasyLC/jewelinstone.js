var numJewelsInStones = function(J, S) {
  let count = 0;
  let map = {};
  for (let i of S) {
    if (!map[i]) {
      map[i] = 1;
    } else {
      map[i]++;
    }
  }

  for (let stone of J) {
    count += map[stone] || 0;
  }

  return count || 0;
};
