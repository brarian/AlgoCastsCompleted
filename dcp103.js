function code(str, input) {
  //first set
  let setArr = [];
  for (let i = 0; i < input.length; i++) {
    setArr.push(str.indexOf(input[i]));
  }
  let sortedSetArr = setArr.sort((a, b) => a - b);

  // last set
  let lastsetArr = [];
  for (let i = 0; i < input.length; i++) {
    lastsetArr.push(str.lastIndexOf(input[i]));
  }
  let sorttedlastsetArr = lastsetArr.sort((a, b) => a - b);
  let first = str.substr(sortedSetArr[0], sortedSetArr[-1]);
  let second = str.substr(sorttedlastsetArr[0], sorttedlastsetArr[-1]);
  //1. find all instances of x in input
  //2. find shortest
  if (first.length > second.length) {
    return second;
  } else if (first.length < second.length) {
    return first;
  } else return null;
}

code("figehaeci", ["a", "e", "i"]);
