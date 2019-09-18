var frequencySort = function(s) {
  let map = new Map();

  s = s.split('');
  s.forEach(el => {
    if (!map[el]) {
      map[el] = 1;
    } else {
      map[el]++;
    }
  });

  let obj = Object.entries(map).sort((a, b) => b[1] - a[1]);

  let res = '';

  for (let i of obj) {
    res += i[0].repeat(i[1]);
  }
  return res;
};

console.log(frequencySort('tree'));
