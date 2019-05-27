//Write a JavaScript program to remove falsey values from an given array. 


const fal = (arr) => {
  return arr.filter(i => !(i) !== true); 
}

console.log(fal([1, 0, NaN, 2, 3, false])); 