//Write a JavaScript function that returns array elements 
//larger than a number.

const filter = (x, num) => {
  let larger = []; 
  for (const i of x){
    if ( i > 5){
      larger.push(i)
    }
  }
  return larger
}

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9], 5))