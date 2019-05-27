//Write a JavaScript function that accepts a string as a
//parameter and counts the number of vowels within the string.

const code = str => {
  let spl = str.toLowerCase().split("");
  let counter = 0;

  for (let i = 0; i < spl.length; i++) {
    if (
      spl[i] === "a" ||
      spl[i] === "e" ||
      spl[i] === "i" ||
      spl[i] === "o" ||
      spl[i] === "u"
    ) {
      counter++;
    }
  }
  return counter;
};

console.log(code("inside"));
