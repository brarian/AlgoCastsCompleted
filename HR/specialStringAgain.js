const specialString = s => {
  const a = getSubStrings(s);
  let arr = [];
  for (let i = 0; i <= a.length; i++) {
    if (s.includes(a[i]) && palindrome(a[i]) === true) {
      arr.push(a[i]);
    }
  }
  return arr;
};
const getSubStrings = s => {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      arr.push(s.slice(i, j));
    }
  }
  return arr;
};

const palindrome = str => {
  let rev = str
    .split('')
    .reverse()
    .join('');
  return str === rev ? true : false;
};

console.log(specialString('mnonopoo'));
