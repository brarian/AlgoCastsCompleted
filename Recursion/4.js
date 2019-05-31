const arSum = (x) => {
    if (x.length === 1){
    return sum + x[0]
  }
  console.log("sum", x[0])
  sum += x[0]
  x.splice(0, 1); 
  return arSum(x); 
}

console.log(arSum([1, 2, 3, 4, 5, 6]));