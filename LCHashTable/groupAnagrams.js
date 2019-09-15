// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

var groupAnagrams = function(strs) {
  let hashTable = {};
  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i]
      .split('')
      .sort()
      .join('');
    if (!hashTable[sorted]) {
      hashTable[sorted] = [strs[i]];
    } else if (hashTable[sorted]) {
      hashTable[sorted].push(strs[i]);
    }
  }
  return Object.values(hashTable);
};
