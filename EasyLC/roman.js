const chars = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M"
};

const vals = Object.keys(chars).sort((i, j) => j - i);

var intToRoman = function(num) {
  let current = num;
  let roman = "";

  for (const val of vals) {
    if (current === 0) break;
    const times = Math.floor(current / val);

    if (times) {
      roman += chars[val].repeat(times);
      current = current - val * times;
    }
  }

  return roman;
};
