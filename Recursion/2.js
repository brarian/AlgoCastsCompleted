//Write a JavaScript program to find the greatest common divisor 
//(gcd) of two positive numbers.

//Greatest Common Divisor (GCD) of two integers A and B is the 
//largest integer that divides both A and B.
//https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm

//1. If A = 0 then GCD(A,B)=B, since the GCD(0,B)=B, and we can stop.
const GCD = (x, y) => {
  console.log(!y)
  if (!y){
    return x; 
  }
  return GCD(y, x%y)
}

console.log(GCD(500, 950)); 