var twoSumLessThanK = function(A, K) {
  let len = A.length;
  for (let i = 0; i < len; i++) {
    for (let j = 1; j < len - 1; j++) {
      let max = 0;
      if (A[i] + A[j] < K) {
        max = A[i] + A[j];
        if (A[i] + A[j] > max) {
          max = A[i] + A[j];
        }
      }
      return max;
    }
  }
};
