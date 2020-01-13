var topKFrequent = function(words, k) {
  let dict = words.reduce((charMap, char) => {
    charMap[char] = (charMap[char] || 0) + 1;
    return charMap;
  }, {});

  let sorted = Object.values(dict)
    .sort((a, b) => b - a)
    .slice(0, k);
  console.log(sorted);
  let res = [];
  for (let i = 0; i < sorted.length; i++) {
    let ans = Object.keys(dict)
      .sort()
      .find(j => dict[j] === sorted[i]);
    res.push(ans);

    delete dict[ans];
  }
  return res;
};
