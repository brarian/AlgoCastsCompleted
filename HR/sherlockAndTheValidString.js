// const validString = str => {
//   let map = {};
//   for (let i of str.split('')) {
//     map[i] = map[i] ? ++map[i] : 1;
//   }

//   let vals = Object.values(map);
//   let freqCount = {};
//   for (let i of vals) {
//     freqCount[i] = freqCount[i] ? ++freqCount[i] : 1;
//   }
//   let numArr = Object.keys(freqCount).map(i => Number(i));
//   console.log(numArr);
//   console.log(Math.abs(numArr[1] - numArr[0]));
//   return Math.abs(numArr[1] - numArr[0]) >= 2 ? 'No' : 'YEs';
//   // if (numArr.length == 1) {
//   //   return 'YES';
//   // }
//   // if (numArr.length >= 3) {
//   //   return 'NO';
//   // }
// };
const validString = s => {
  const map = {};
  if (s.length <= 3) return 'YES';
  for (let i of s) {
    map[i] = map[i] ? ++map[i] : 1;
  }
  let sorted = Object.values(map).sort(function(a, b) {
    return a - b;
  });
  const len = sorted.length;

  if (sorted[0] === sorted[len - 1]) return 'YES';

  return (sorted[0] === sorted[len - 2] && sorted[len - 1] - sorted[0] === 1) ||
    (sorted[1] === sorted[len - 1] && sorted[0] === 1)
    ? 'YES'
    : 'NO';
};

console.log(validString('aaabbccc'));
