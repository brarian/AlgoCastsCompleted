//Given n numbers, find the greatest common denominator
//between them.
//For example, given the numbers [42, 56, 14], return 14.

const gcd = arr => {
  let max = [];

  // go through each element

  const factor = n => {
    let res = [];
    for (let i = 0; i <= n; i++) {
      if (n % i === 0) {
        res.push(i);
      }
    }
    max.push(res);
  };
  arr.map(j => factor(j));

  return Math.max(...max.reduce((p, c) => p.filter(i => c.includes(i))));
};

console.log(gcd([42, 56, 14]));
