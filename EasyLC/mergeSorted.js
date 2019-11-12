const merge = (nums1, m, nums2, n) => {
  let count = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] === 0) {
      count++;
      if (count == n) {
        nums1.splice(nums1.length - n);
      }
    }
  }
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
};
