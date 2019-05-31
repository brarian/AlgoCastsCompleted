//Write a JavaScript function to get the function name.

function num(){
  return arguments.callee.name;
}

console.log(num())