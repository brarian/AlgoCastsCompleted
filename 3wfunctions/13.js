//Write a JavaScript function to compute the factors of a
//positive integer.

const fn = n => {
  let arr = [];
  if (n <= 0) {
    return "need a positive number greater than 0";
  }
  let i = 1;
  while (i <= n) {
    if (n % i === 0) {
      arr.push(i); 
    }
    i++;
  }
  return arr; 
};

console.log(fn(99));
