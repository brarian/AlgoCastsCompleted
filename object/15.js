var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

const list = obj => {
  let l = [];
  for (i in obj) {
    l.push([`${i}, ${obj[i]}`]);
  }
  return l;
};
console.log(list(student));
