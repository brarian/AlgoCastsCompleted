function fn(N) {
  let arr = [];
  for (let i = 2; i <= N; i++) {
    for (let j = 2; j <= N; j++) {
      arr.push(i * j);
    }
  }
  sortedarr = arr.sort((a, b) => a - b);

  let lessThanN = arr.filter(i => i < N);
  let primes = [];
  for (let i = 1; i < N; i++) {
    if (lessThanN.includes(i) === false) {
      primes.push(i);
    }
  }
  return primes;
}
