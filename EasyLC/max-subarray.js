var maxSubArray = function(nums) {
  let max = nums[0];
  let sum = 0;
  for (let i of nums) {
    sum += i;
    if (max < sum) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};
