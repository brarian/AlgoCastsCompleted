var topKFrequent = function(nums, k) {
  let dict = nums.reduce((charMap, char) => {
    charMap[char] = (charMap[char] || 0) + 1;
    return charMap;
  }, {});
  let charMapValues = Object.values(dict);
  let sorted = charMapValues.sort((a, b) => b - a).slice(0, k);
  let res = [];
  for (let i in dict) {
    if (sorted.includes(dict[i])) {
      res.push(Number(i));
    }
  }
  return res;
};
