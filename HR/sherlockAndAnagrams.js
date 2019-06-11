const getSubStrings = s => {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      arr.push(s.slice(i, j));
    }
  }
  return arr;
};

const checkSubStr = arr => {
  let dict = {};
  let count = 0;
  for (let i of arr) {
    const sorted = i
      .toLowerCase()
      .split("")
      .sort()

      .join("");
    if (dict[sorted]) {
      count += dict[sorted];
      dict[sorted] += 1;
    } else {
      dict[sorted] = 1;
    }
  }
  return count;
};
const sherlockAndAnagrams = s => {
  let y = getSubStrings(s);
  return checkSubStr(y);
};

console.log(sherlockAndAnagrams("abba"));
