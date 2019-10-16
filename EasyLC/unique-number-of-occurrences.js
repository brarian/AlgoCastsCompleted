var uniqueOccurrences = function(arr) {
  let map = {};
  for (let i of arr) {
    if (!map[i]) {
      map[i] = 1;
    } else {
      map[i]++;
    }
  }

  let vals = Object.values(map);
  let unique = [...new Set(vals)].length;
  if (vals.length === unique) {
    return true;
  }
  return false;
};
