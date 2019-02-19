// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    let vals = str.split("");
    let tally = {};
    let maxLetter = vals[0];
    vals.forEach((x) => {
        tally[x] = (tally[x] || 0) + 1;
        if (tally[x] > tally[maxLetter] && x !== maxLetter) {
          maxLetter = x
        }
      });
      return maxLetter;
  }
  
  module.exports = maxChar;