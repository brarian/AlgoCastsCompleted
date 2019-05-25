function threeOrSeven(num){
  if (num % 3 === 0 ){
    return `number is a multiple of 3`
  }
  else if (num % 7 === 0 ){
    return `number is a multiple of 7`
  }
  else return `neither`
}

console.log(threeOrSeven(45))