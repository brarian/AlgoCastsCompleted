//Write a JavaScript function that accept a list of country names as input
//and returns the longest country name as output

const longest = arr => {
  return arr.sort((a, b) => b.length-a.length)[0]; 
};

console.log(longest(["Australia", "Germany", "United States of America"]));