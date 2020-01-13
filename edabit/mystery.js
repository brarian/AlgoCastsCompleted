function mysteryFunc(num) {
  let red = num
    .toString()
    .split("")
    .map(x => Number(x));
  return red.reduce((a, b) => a * b);
}
