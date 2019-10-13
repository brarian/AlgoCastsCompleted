var reverseVowels = function(s) {
  let vowels = 'aeiouAEIOU';
  let str = '';
  let map = new Map();
  for (let i in s) {
    if (!map[i]) {
      if (vowels.includes(s[i])) {
        str += s[i];
        map.set(i, '');
      } else {
        map.set(i, s[i]);
      }
    }
  }

  // let map = splitAndReplace();
  let reversed = str.split('').reverse();
  let rev = 0;
  let result = '';
  for (let i of map.values()) {
    if (i === '') {
      console.log(rev);
      i = reversed[rev];
      rev++;
    }
    result += i;
  }

  return result;
};
