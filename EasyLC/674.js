var findLengthOfLCIS = function(nums) {
  let longest = 0;
  let count = 0;
  let prev = 0;

  for (let i of nums) {
    if (i > prev) {
      count++;
    } else {
      count = 1;
    }
    prev = i;
    longest = Math.max(longest, count);
  }
  return longest;
};
