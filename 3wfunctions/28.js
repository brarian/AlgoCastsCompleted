//Write a JavaScript program to pass a 'JavaScript function' as parameter

const operation = (num, fn) => {
  return 2 * fn(num); 
}

const fun = (num) => {
  return num + 1
}

console.log(operation(3, fun))