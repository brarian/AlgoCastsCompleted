const gcd = x => {
  let factors = [];
  for (let i = 0; i <= x; i++) {
    if (x % i == 0) {
      factors.push(i);
    }
  }
  return factors;
};

console.log(gcd(12));
