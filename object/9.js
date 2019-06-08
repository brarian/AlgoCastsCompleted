let x = prompt("enter the radius");

const area = r => {
  document.getElementById("area").innerHTML = `Area: ${(
    r *
    r *
    Math.PI
  ).toFixed(2)}`;
};

const perimeter = r => {
  document.getElementById("peri").innerHTML = `Permiter: ${(
    2 *
    r *
    Math.PI
  ).toFixed(2)}`;
};
area(x);
perimeter(x);
