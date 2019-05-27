//Write a JavaScript function which will take an array of 
//numbers stored and find the second lowest and second 
//greatest numbers, respectively


const fn = (x) => {
  let sorted = x.sort((a, b)=> a - b); 
  return `[${Number(sorted[1])}, ${Number(sorted[sorted.length -2])}]`;
}

console.log(fn([3, 4, 1, 5, 7, 0]))