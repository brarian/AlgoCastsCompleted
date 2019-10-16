var findTheDifference = function(s, t) {
  let combo = [...t.split(''), ...s.split('')];
  let map = {};
  for (let i of combo) {
    if (map[i]) {
      map[i] = 0;
    } else {
      map[i] = 1;
    }
  }

  return Object.keys(map).find(el => map[el] !== 0);
};
