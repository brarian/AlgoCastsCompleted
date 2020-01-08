var missingNumber = function(nums) {
  let sum = nums.reduce((a, b) => a + b);
  let add = (nums.length * nums.length + nums.length * 1) / 2;
  return add - sum;
};
