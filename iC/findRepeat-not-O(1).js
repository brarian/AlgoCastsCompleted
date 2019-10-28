function findRepeat(numbers) {
  // Find the number that appears twice
  let unique = new Set();

  for (let i of numbers) {
    if (!unique.has(i)) {
      unique.add(i);
    } else return i;
  }

  return -1;
}
