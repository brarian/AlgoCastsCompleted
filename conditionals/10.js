const pattern = x => {
  // let a = "";
  // for (let i = 1; i <= x; i++) {
  //   console.log("*".repeat(i));
  // }

  for (let i = "*"; i.length <= x; i += "*") {
    console.log(i);
  }
};

console.log(pattern(4));
