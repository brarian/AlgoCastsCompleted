function matches(str) {
  return str.split('').reduce((prev, char) => {
    if (prev < 0) return prev;
    if (char === '(') return prev++;
    if (char === ')') return prev--;

    return prev;
  }, 0);
}
