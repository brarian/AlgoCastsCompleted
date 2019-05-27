//Write a JavaScript function that returns a passed string with 
//letters in alphabetical order


const code = (x) => x.split("").sort().join(""); 


console.log(code("abcd"))

console.log(code("dog"))

console.log(code("cat"))