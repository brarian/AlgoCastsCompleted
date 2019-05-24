function getArea(a, b, c){
  let s = ((a+b+c)/2)
  let tBeSq = s*(s-a) * (s-b) * (s-c)
  return Math.sqrt(tBeSq);
}

console.log(getArea(5, 6, 7));