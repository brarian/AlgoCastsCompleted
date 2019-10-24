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

var numJewelsInStones = function(J, S) {
  if (J.length === 0 || S.length === 0) {
    throw new Error('no stones or jewels');
  }
  let sum = 0;
  let sArray = S.split('');

  for (let i of J) {
    sum += sArray.filter(el => el === i).length;
  }
  return sum;
};
