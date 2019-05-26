//Write a JavaScript program to measure the 
//time taken by a function to execute.

const code = (a, b) => {
  let date = new Date()
  let start = date.getTime()
  let answer = a+b
  let end = date.getTime() 
  let duration = end - start; 
  console.log(`the answer  ${answer} took ${duration}`); 
}

console.log(code(3, 4)); 