function removeVowels(str) {
  let vowels = 'aeiouAEIOU';
  let res = '';

  for (let i of str) {
    if (!vowels.includes(i)) {
      res += i;
    }
  }
  return res;
}
