var maximumProduct = function(nums) {
  if (nums.length < 3) {
    throw new Error("too few nums");
  }

  let low = Math.min(nums[0], nums[1]);
  let high = Math.max(nums[0], nums[1]);
  let highest = nums[0] * nums[1];
  let lowest = nums[0] * nums[1];

  let highestProductOf3 = nums[0] * nums[1] * nums[2];
  for (let i = 2; i < nums.length; i++) {
    let current = nums[i];
    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highest,
      current * lowest
    );

    highest = Math.max(highest, current * high, current * low);
    lowest = Math.min(lowest, current * high, current * low);
    low = Math.min(current, low);
    high = Math.max(current, high);
  }
  return highestProductOf3;
};
