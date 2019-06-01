const even = x => {
  if (x % 2 === 0) {
    return `even`;
  }
  return `odd`;
};

console.log(even(2));
console.log(even(13));
console.log(even(9));
console.log(even(6));

const evenRecursive = num => {
  if (num < 0) {
    num = Math.abs(x);
  }
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else {
    num = num - 2;
    return evenRecursive(num);
  }
};
console.log(evenRecursive(4));
console.log(evenRecursive(14))
console.log(evenRecursive(97))