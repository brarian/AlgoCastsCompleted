const len = x => {
  let counter = 0;
  for (i in x) {
    counter++;
  }
  return counter;
};

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

console.log(len(student));
