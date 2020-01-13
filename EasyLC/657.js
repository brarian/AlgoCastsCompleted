var judgeCircle = function(moves) {
  let map = {
    R: 1,
    L: -1,
    U: 2,
    D: -2
  };
  let sum = 0;
  for (let i = 0; i < moves.length; i++) {
    sum += map[moves[i]];
  }
  return sum === 0 ? true : false;
};
