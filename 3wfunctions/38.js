//Write a JavaScript program to pad a string on both
//sides with the specified character, if it's shorter than
//the specified length.
const pad = (str, len, char) => {
  if (str.length < len) {
    return `${char}${str}${char}`;
  }
  return str;
};

console.log(pad("brarian", 4, "$"));
