const del = x => {
  console.log(x);
  if (x["rollno"]) {
    delete x["rollno"];
  }
  console.log(x);
};

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

console.log(del(student));
