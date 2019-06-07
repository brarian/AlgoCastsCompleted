//Write a JavaScript function that generates all combinations of a string.

const code = x => {
  let arr = x.split("");
  let res = [[]];

  for (const i of arr) {
    const copy = [...res];
    for (const j of copy) {
      res.push(j.concat(i));
    }
  }
  return res.join("");
};

console.log(code("dog"));
console.log(code("cat"));
