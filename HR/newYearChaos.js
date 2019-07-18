function minimumBribes(q) {
  let counter = 0;
  for (let i = 0; i < q.length; i++) {
    if (q[i] > i + 3) {
      return "Too chaotic";
    }
    if (q[i] === i + 2) {
      counter++;
    }
    if (q[i] === i + 3) {
      counter++;
      counter++;
    }
  }
  return counter;
}

console.log(minimumBribes([2, 1, 5, 3, 4]));
