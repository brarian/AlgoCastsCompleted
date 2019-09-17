var intersect = function(nums1, nums2) {
  let map = {};
  let res = [];
  nums1.forEach(el => {
    if (!map[el]) {
      map[el] = 1;
    } else {
      map[el]++;
    }
  });
  nums2.forEach(el => {
    if (map[el] && map[el] > 0) {
      res.push(el);
      map[el]--;
    }
  });
  return res;
};
