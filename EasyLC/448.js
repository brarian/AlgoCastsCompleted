var findDisappearedNumbers = function(nums) {
  let n = nums.length;
  let arr = Array.from(Array(n).keys()).map(i => i + 1);

  let ans = arr.filter(i => !nums.includes(i));
  return ans;
};
