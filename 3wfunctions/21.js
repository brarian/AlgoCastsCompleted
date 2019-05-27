//Write a JavaScript function to get all possible subset 
//with a fixed length (for example 2) combinations in an array.

const fn = (arr, num) => {
  let res = [[]]; 
  for (const i of arr){
    const copy = [...res]; 
    for (const j of copy){
      res.push(j.concat(i))
    }
  }
  let result = []; 
  for (const n of res){
    if (n.length == 2){
      result.push(n)
    }
  } 
  return result
}

console.log(fn([1, 2, 3, 4, 5]))