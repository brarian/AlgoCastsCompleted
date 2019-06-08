const reorder = x => {
  let n = {};
  for (i in x) {
    n[x[i]] = i;
  }
  return n;
};

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

console.log(reorder(student));
