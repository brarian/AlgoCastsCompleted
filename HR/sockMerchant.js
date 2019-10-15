function sockMerchant(n, ar) {
  let map = {};
  let counter = 0;
  for (let i = 0; i < ar.length; i++) {
    if (!map[ar[i]]) {
      map[ar[i]] = 1;
    } else {
      map[ar[i]]++;
      if (map[ar[i]] == 2) {
        counter++;
        map[ar[i]] = 0;
      }
    }
  }
  return counter;
}
