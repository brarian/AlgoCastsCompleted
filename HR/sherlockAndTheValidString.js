const validString = str => {
  let map = {};
  // for (let i of str.split("")) {
  //   if (!map[i]) {
  //     map[i] = 1;
  //   } else {
  //     map[i]++;
  //   }
  // }

  // let mapValues = Object.values(map);
  // let unique = Array.from(new Set(mapValues));
  // if (unique.length > 2 && mode) return "NO";
  // console.log(mapValues);

  for (let i of str.split("")) {
    map[i] = map[i] ? ++map[i] : 1;
  }

  let vals = Object.values(map);
  let freqCount = {};
  for (let i of vals) {
    freqCount[i] = freqCount[i] ? ++freqCount[i] : 1;
  }
  let numArr = Object.keys(freqCount).map(i => Number(i));

  if (freqCount.length == 1) {
  }
};

console.log(validString("aaabbcc"));
