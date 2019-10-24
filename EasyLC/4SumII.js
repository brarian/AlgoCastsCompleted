const A = [1, 2];
const B = [-2, -1];
const C = [-1, 2];
const D = [0, 2];

function tups(a, b, c, d) {
  let arr = [a, b, c, d];

  let zeroSum = 0;
  let oneSum = 0;
  arr.forEach(function(el) {
    zeroSum += el[0];
  });
  arr.forEach(function(el) {
    oneSum += el[1];
  });
  return oneSum;
}
//tuples??
