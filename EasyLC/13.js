var romanToInt = function(s) {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  };

  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i - 1]] < obj[s[i]]) {
      res -= 2 * obj[s[i - 1]];
    }
    res += obj[s[i]];
  }

  return res;
};
