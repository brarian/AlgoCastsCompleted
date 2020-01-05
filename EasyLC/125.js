//125. Valid Palindrome

var isPalindrome = function(s) {
  let valid = "abcdefghijklmnopqrstuvxwzyz1234567890";
  s = s.toLowerCase().split("");
  let newStr = "";
  for (let i of s) {
    if (valid.includes(i)) {
      newStr += i;
    }
  }

  let rev = newStr
    .split("")
    .reverse()
    .join("");
  return rev === newStr;
};
