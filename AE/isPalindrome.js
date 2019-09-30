function isPalindrome(string) {
  // Write your code here.
  let flip = string
    .split('')
    .reverse()
    .join('');
  if (string === flip) {
    return true;
  }
  return false;
}
