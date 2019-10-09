var findMedianSortedArrays = function(nums1, nums2) {
  let merged = nums1.concat(nums2).sort((a, b) => a - b);
  let nums = [
    merged[Math.floor(merged.length / 2)],
    merged[Math.floor(merged.length / 2 - 1)]
  ];
  if (merged.length % 2 != 0) {
    return merged[Math.floor(merged.length / 2)];
  } else {
    return (nums[0] + nums[1]) / 2;
  }
};
