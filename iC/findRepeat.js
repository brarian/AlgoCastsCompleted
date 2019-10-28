//O(1) additional memory

function findRepeat(numbers) {
  // Find the number that appears twice
  let len = numbers.length - 1;

  //give sum of all numbers from 1... n
  let all = (len * (len + 1)) / 2;
  let sum = numbers.reduce((a, b) => a + b);

  return sum - all;
}
