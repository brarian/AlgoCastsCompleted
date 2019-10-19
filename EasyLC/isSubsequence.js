function isSubsequence(s, t) {
  if (!s.length) return true;
  let sIndex = 0;
  for (let i of t) {
    if (i == s[sIndex]) {
      sIndex++;
    }
  }
  return sIndex == s.length;
}
