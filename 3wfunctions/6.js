//Write a JavaScript function that accepts a string as a parameter
//and find the longest word within the string.

const code = str => {
  let max = 0;
  let spl = str.split(" ");
  for (let i = 0; i < spl.length; i++) {
    if (max < spl[i].length){
      max = spl[i];
    }else if (spl[i].length > max.length){
      max = spl[i]
    }
  }
  return max; 
};
console.log(code("my name is breariam ok it is the bext day in the "));
