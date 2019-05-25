//Write a JavaScript program to sort the characters of a string Alphabetically. 

function sortStr(str){
  return str.split("").sort().join("")
}

console.log(sortStr("doc"))

