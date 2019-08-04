function maxXOR(arr) {
  let max = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i; j <= arr.length - 1; j++) {
      if ((arr[i] ^ arr[j]) > max) {
        max = arr[i] ^ arr[j];
      }
    }
  }
  return max;
}

maxXOR([9, 5, 3]);
