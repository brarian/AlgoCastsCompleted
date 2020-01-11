var findRestaurant = function(list1, list2) {
  const map = [...list2, ...list1].reduce((charMap, char) => {
    charMap[char] = (charMap[char] || 0) + 1;
    return charMap;
  }, {});

  let dups = Object.keys(map).filter(i => map[i] > 1);
  let newObj = {};
  for (let i = 0; i < dups.length; i++) {
    min = list1.indexOf(dups[i]) + list2.indexOf(dups[i]);
    newObj[dups[i]] = min;
  }
  let smallest = Object.values(newObj).sort((a, b) => a - b)[0];
  let res = [];
  for (let i in newObj) {
    if (newObj[i] === smallest) {
      res.push(i);
    }
  }
  return res;
};
