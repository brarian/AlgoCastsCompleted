var merge = function(nums1, m, nums2, n) {
  nums2.forEach(item => {
    nums1[m++] = item;
  });
  return nums1.sort((a, b) => a - b);
};
