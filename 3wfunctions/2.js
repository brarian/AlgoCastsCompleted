//Write a JavaScript function that checks whether a 
//passed string is palindrome or not?

const code = (x) => {
  if (x.replace(" ", "").split("").join("") === x.replace(" ", "").split("").reverse().join("")){
    return true
  }
  return false; 
}

console.log(code("madam"))
console.log(code("nurses run")); 

