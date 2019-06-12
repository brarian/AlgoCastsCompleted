let str = "abaacdabd";

const alternate = x => {
  //unique values from string
  let st = Array.from(new Set(x));

  // all possible combinations
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    for (let j = i + 1; j < x.length; j++) {
      arr.push(x.slice(i, j));
    }
  }
  // we only want combos that are 2 characters in length AND are different characters
  let combos = arr.filter(i => i.length == 2 && i[0] !== i[1]);
  combos = combos.map(i => i.split(""));

  // we are going to filter combos from our string
  x = x.split("");
};

alternate(str);
