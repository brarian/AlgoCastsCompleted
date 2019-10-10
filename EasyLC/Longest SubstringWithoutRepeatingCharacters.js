var lengthOfLongestSubstring = function(s) {
  let max = 0;
  let start = 0;
  let current;
  let unique;
  for (let i = 1; i < s.length; i++) {
    current = s.substr(start, i);
    unique = new Set(current);
    console.log(unique);
    if (unique.size !== current.length) {
      current = s.substr(start + 1, i);
    }
  }
  return max;
};

lengthOfLongestSubstring('dvdf');

//second try
var lengthOfLongestSubstring = function(s) {
  let start = 0;
  let unique = '';
  let max = 0;
  let counter;
  for (let char = start; char < s.length; char++) {
    if (!unique.includes(s[char])) {
      unique += s[char];
      console.log(unique);
      max = Math.max(max, unique.length);
    } else {
      unique = '';
      start += 1;
    }
  }
  return max;
};
