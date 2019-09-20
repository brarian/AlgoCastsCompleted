var thirdMax = function(nums) {
  let n = Array.from(new Set(nums));
  if (n.length < 3) {
    return n.sort((a, b) => b - a)[0];
  } else {
    return n.sort((a, b) => b - a)[2];
  }
};
