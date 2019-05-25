//Write a JavaScript program to combine the numbers of a 
//given array into an array containing all combinations.

const combos = (array) => {
  const res = [[]]; 
  for (const i of array){
    const copy = [...res];
    for (const j of copy){
      res.push(j.concat(i))
    } 
  }
  return res; 
}

console.log(combos([1, 2, 3, 5]))