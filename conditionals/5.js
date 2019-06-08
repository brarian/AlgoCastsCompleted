const oddOrEven = x => {
  for (let i = 0; i <= x; i++) {
    if (i % 2 == 0) {
      console.log(`${i} is even`);
    } else if (i % 2 !== 0) {
      console.log(`${i} is odd`);
    }
  }
};

console.log(oddOrEven(15));
