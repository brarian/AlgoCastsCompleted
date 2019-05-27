//Write a JavaScript function to  get the number of
//occurrences of each letter in specified string

const fn = str => {
  let dict = {};
  let split = str.split("");
  for (const char of split) {
    if (!dict[char]) {
      dict[char] = 1;
    } else {
      dict[char]++;
    }
  }
  return dict;
};

console.log(fn("hello"));
