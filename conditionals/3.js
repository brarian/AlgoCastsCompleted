//Write a JavaScript conditional statement to sort three numbers

const three = (a, b, c) => {
  let arr = [],
    res = [];

  arr.push(a, b, c);

  while (arr.length > 0) {
    let index = arr.indexOf(Math.max(...arr));
    res.push(Math.max(...arr));
    arr.splice(index, 1);
  }
  return res;
};

console.log(three(1, 4, 2));
