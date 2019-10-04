function reverse(n) {
  let rev = '';
  for (let i = n.length - 1; i >= 0; i--) {
    rev += n[i];
  }
  return rev;
}
reverse('hello');
