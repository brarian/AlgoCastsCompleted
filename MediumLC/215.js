var findKthLargest = function(nums, k) {
  let sortedArray = [...nums].sort((a, b) => a - b);
  let last = nums.length - k;
  return sortedArray[last];
};
