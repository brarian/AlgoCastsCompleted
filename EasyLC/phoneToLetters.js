const letterCombinations = digits => {
  let output = [];
  if (digits) {
    output = [""];
    for (const digit of digits) {
      output = perms(output, digit);
    }
  }
  return output;
};

const map = new Map([
  ["2", "abc"],
  ["3", "def"],
  ["4", "ghi"],
  ["5", "jkl"],
  ["6", "mno"],
  ["7", "pqrs"],
  ["8", "tuv"],
  ["9", "wxyz"]
]);

const perms = (input, nextDigit) => {
  const output = [];
  for (const letter of map.get(nextDigit)) {
    for (const combination of input) {
      output.push(combination + letter);
    }
  }
  return output;
};
