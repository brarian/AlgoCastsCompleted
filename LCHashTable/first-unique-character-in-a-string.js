// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
// Examples:
// s = "leetcode"
// return 0.
// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters
var firstUniqChar = function(s) {
  if (!s.length) {
    return -1;
  }
  const map = {};
  let letter = s.split('');
  for (let i = 0; i < letter.length; i++) {
    if (!map[letter[i]]) {
      map[letter[i]] = 1;
    } else {
      map[letter[i]]++;
    }
  }
  let firstChar = Object.keys(map).find(i => map[i] == 1);

  if (!firstChar) {
    return -1;
  }
  return s.indexOf(firstChar);
};
