//Write a JavaScript function to compute the value of bn 
//where n is the exponent and b is the bases.
//Accept b and n from the user and display the result. 

const fn = (b, n) => {
  let mult = 1
  for (let i=1; i <= n; i++){
    mult *= b; 
  }
  return mult
}

console.log(fn(3,3)); 