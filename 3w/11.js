//Write a JavaScript program to generate a random hexadecimal color code
function hex() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

console.log(hex()); 