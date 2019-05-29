//Write a JavaScript function that accepts two arguments, 
//a string and a letter and the function will count the number 
//of occurrences of the specified letter within the string.

const fn = (str, letter) => {
  let spl = str.toLowerCase().split(""); 
  letter = letter.toLowerCase();
  console.log(spl.filter(i => i === letter).length); 
}

console.log(fn("zsdfdfzsdfdsfzwqeqezeewqe", "e"));