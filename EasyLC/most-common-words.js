var mostCommonWord = function(paragraph, banned) {
  var para = paragraph
    .toLowerCase()
    .replace(/[\W+/]/g, ' ')
    .split(' ');
  var table = {};
  for (word of para) {
    if (banned.includes(word) || word === '') {
      continue;
    }

    if (!table[word]) {
      table[word] = 1;
    } else {
      table[word]++;
    }
  }

  return Object.keys(table).reduce((a, b) => (table[a] > table[b] ? a : b));
};
