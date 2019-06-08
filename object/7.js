const subset = x => {
  let arr = [];

  for (let i = 0; i < x.length; i++) {
    for (let j = 1; j < x.length + 1; j++) {
      arr.push(x.slice(i, j));
    }
  }
  return arr.filter(i => i != "");
};

console.log(subset("dog"));
