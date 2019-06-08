//Write a JavaScript conditional statement to find the sign
//of product of three numbers. Display an alert box with
//the specified sign.

function sign(x, y, z) {
  let a = [];
  // for (let i = 0; i < arguments.length; i++) {
  //   a.push(arguments[i]);
  // }
  a.push(x, y, z);
  let sumOfAll = a.reduce((a, b) => a * b);

  if (sumOfAll == 0) {
    return "0";
  }
  return Math.sign(sumOfAll) > 0 ? "+" : "-";
}

window.alert(sign(-44, 5, 6));
