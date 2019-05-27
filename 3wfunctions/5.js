//Write a JavaScript function that accepts a string as a parameter and 
//converts the first letter of each word of the string in upper case.

const code = (str) => {
  let spl = str.split(" "); 
  let result = ""; 
  for (const i of spl){
    result += i.substr(0, 1).toUpperCase() + i.substr(1) + " " 
  }
  return result;
}

console.log(code("my name is brarian ")); 