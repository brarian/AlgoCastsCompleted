var sortArrayByParityII = function(A) {
  let even = A.filter((el, i) => el % 2 === 0);
  let odd = A.filter((el, i) => el % 2 !== 0);

  let res = [];

  for (let i in even) {
    res.push(even[i], odd[i]);
  }

  return res;
};
