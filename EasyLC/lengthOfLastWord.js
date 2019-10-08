var lengthOfLastWord = function(s) {
  if (s === ' ' || s === '') {
    return 0;
  }
  let spl = s.trim().split(' ');
  let removedSpaces = spl.filter(el => el !== '' || el !== ' ');
  return removedSpaces[removedSpaces.length - 1].length;
};
