//Write a JavaScript program to combine the numbers of
//a given array into an array containing all combinations.

// for (let i = 0; i < x.length; i++) {
//   for (let j = i + 1; j < x.length; j++) {
//     arr.push(x.slice(i, j));
//   }
// }
const fn = arr => {
  // let newArr = [];
  // for (let i = 0; i < arr.length + 1; i++) {
  //   for (let j = i + 1; j < arr.length + 1; j++) {
  //     newArr.push(arr.slice(i, j));
  //   }
  // }
  // return newArr;

  return arr.reduce((s, e) => s.concat(s.map(i => [e].concat(i))), [[]]);
};

console.log(fn([1, 2, 3]));
