function allInts(intArray) {
  let res = [];
  for (let i = 0; i < intArray.length; i++) {
    let removedI = intArray.filter(el => intArray[i] !== el);
    res.push(removedI.reduce((accum, currVal) => accum * currVal));
  }

  return res;
}
