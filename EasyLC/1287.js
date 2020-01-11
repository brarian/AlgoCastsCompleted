var findSpecialInteger = function(arr) {
  let dict = arr.reduce((charMap, char) => {
    charMap[char] = (charMap[char] || 0) + 1;
    return charMap;
  }, {});
  let maxOccurence = Object.values(dict).sort((a, b) => b - a)[0];
  return Object.keys(dict).find(i => dict[i] === maxOccurence);
};
