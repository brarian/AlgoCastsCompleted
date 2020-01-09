//Product of Array Except Self

var productExceptSelf = function(nums) {
  let productOfAll = [];
  let current = 1;
  for (let i = 0; i < nums.length; i++) {
    productOfAll[i] = current;
    current *= nums[i];
  }

  let currentBack = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    productOfAll[j] *= currentBack;
    currentBack *= nums[j];
  }

  return productOfAll;
};
