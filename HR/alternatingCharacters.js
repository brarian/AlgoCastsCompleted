function alternatingCharacters(s) {
  let spl = s.split('');
  let arr = [spl[0]];
  for (let i = 1; i < spl.length; i++) {
    if (spl[i] !== arr[arr.length - 1]) {
      arr.push(spl[i]);
    }
  }
  return spl.length - arr.length;
}

console.log(alternatingCharacters('AAABBB'));
