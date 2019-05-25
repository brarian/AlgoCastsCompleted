function numToArr(x){
  return x.toString().split("").map(i => Number(i))
}

console.log(numToArr(77)); 