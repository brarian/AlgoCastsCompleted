//Given a string of parentheses, write a function 
// to compute the minimum number of parentheses to 
// be removed to make the string valid (i.e. each 
//   open parenthesis is eventually closed).

//For example, given the string "()())()", you should 
// return 1. Given the string ")(", you should return 2, 
// since we must remove all of them.

function code(str) {
  let count = 0;
  //loop through string
  for (let i = 0; i < str.length; i++) {
    //start at 0 
    let start = str[i];
    //count +2 for every pair 
    if (str[i] === "(" && str[i + 1] === ")") {
      count = count + 2;
      // start at next position, )( will not up counter 
      start = str[i + 1];
    }
  }
  return str.length - count;
}
