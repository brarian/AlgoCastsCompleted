var topKFrequent = function(nums, k) {
  let map = {};

  for (let i of nums) {
    if (!map[i]) {
      map[i] = 1;
    } else {
      map[i]++;
    }
  }

  let sorted = Object.values(map)
    .sort((a, b) => b - a)
    .splice(0, k);

  let res = [];

  for (let i of sorted) {
    let num = Number(Object.keys(map).find(el => map[el] === i));
    res.push(num);
    delete map[num];
  }

  return res;
};
