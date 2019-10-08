var calculateTime = function(keyboard, word) {
  let map = new Map();
  for (let i = 0; i < keyboard.length; i++) {
    map.set(keyboard[i], i + 1);
  }
  let sum = 0;
  let starter;
  for (let j = 0; j < word.length - 1; j++) {
    starter = Math.abs(1 - map.get(word[0]));
    sum += Math.abs(map.get(word[j + 1]) - map.get(word[j]));
  }
  return sum + starter;
};
