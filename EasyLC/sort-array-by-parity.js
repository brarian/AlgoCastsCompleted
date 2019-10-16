var sortArrayByParity = function(A) {
  if (!A.length) {
    return -1;
  }
  let even = A.filter(el => el % 2 === 0);
  let odd = A.filter(el => el % 2 !== 0);
  return [...even, ...odd];
};
