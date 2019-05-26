//Write a JavaScript program that will return true if the string is y/yes 
//or false if the string is n/no.

const val = (str) => {
  if (str == "yes" || str == "y"){
    return true
  } else if (str == "no" || str == "n"){
    return false
  }
else return null
}

console.log(val("yes"))
console.log(val("no"))
console.log(val("n"))
console.log(val("y"))
console.log(val("15"))