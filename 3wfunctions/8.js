//Write a JavaScript function that accepts a number as a 
//parameter and check the number is prime or not.

const prime = (x) => {
  for (let i=2; i < x; i++){
    if (x % i === 0){
      return false; 
    }
  }
  return true; 
}
console.log(prime(1))
console.log(prime(3))
console.log(prime(15))
console.log(prime(25))
console.log(prime(37))