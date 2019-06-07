//Write a JavaScript function to extract unique characters
//from a string.

const unique = x => {
  let uni = "";
  for (let i = 0; i < x.length; i++) {
    if (uni.indexOf(x.charAt(i)) == -1) {
      uni += x[i];
    }
  }
  //  return uni;

  return Array.from(new Set(x)).join("");
};

console.log(unique("thequickbrownfoxjumpsoverthelazydog"));
