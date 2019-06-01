const arSum = (x) => {
  if (x.length === 1){
    return x[0]
  } 
  y = x.splice(0, 1); 
  return arSum(y) + arSum(x); 
}

console.log(arSum([1, 2, 3, 4, 5, 6]));