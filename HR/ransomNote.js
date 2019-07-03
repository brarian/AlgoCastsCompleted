const ransomNote = (magazine, note) => {
  let mag = {},
    no = {};

  for (i of magazine) {
    if (!mag[i]) {
      mag[i] = 1;
    } else {
      mag[i]++;
    }
  }

  for (i of note) {
    if (!no[i]) {
      no[i] = 1;
    } else {
      no[i]++;
    }
  }

  const res = (maga, not) => {
    for (let i in not) {
      let check;
      if (maga[i] === true && maga[i] === not[i]) {
        check = true;
      } else {
        check = false;
      }
      // console.log(check);

      return check;
    }
  };

  return res(mag, no);
};

console.log(
  ransomNote("give me one grand today night", "give one grand in today")
);
