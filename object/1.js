var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
const obj = x => {
  let res = "";
  for (i in x) {
    res += i + ", ";
  }
  return res;
};

console.log(obj(student));
