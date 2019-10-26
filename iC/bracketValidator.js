function isValid(code) {
  // Determine if the input code is valid
  if (code.length % 2 !== 0) {
    return false;
  }
  let map = '';
  let sum = 0;
  let opener = ['(', '{', '['];
  let closer = [')', '}', ']'];

  for (i of code.split('')) {
    if (opener.includes(i)) {
      map += i;
      sum++;
    }
    if (closer.includes(i)) {
      let temp = map.substr(-1) + i;
      if (temp === '{}' || temp === '()' || temp === '[]') {
        map = map.substr(0, map.length - 1);
        sum--;
      } else sum--;
    }
  }
  if (map.length > 0) {
    return false;
  }
  return true;
}
