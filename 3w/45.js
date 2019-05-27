//Write a JavaScript program to split values into two groups, if an 
// element in filter is truthy, the corresponding element in the collection 
// belongs to the first group; otherwise, it belongs to the second group


const fal = (arr) => {
  let truthy =[] ;
  let falsy = []; 
  truthy.push(...arr.filter(i => !(i) !== true)); 
  falsy.push(...arr.filter(i => !(i) === true)); 
  console.log(truthy, falsy)
}

console.log(fal([1, 0, NaN, 2, 3, false])); 