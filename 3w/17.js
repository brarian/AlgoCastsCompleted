// Write a JavaScript program to split values of two given arrays 
// into two groups. If an element in filter is truthy, the corresponding 
// element in the collection belongs to the first group; otherwise,
// it belongs to the second group.

function code(arr){
  let arr1 = []; 
  let arr2 =[]; 

  for (let i of arr){
    if (i%2 === 0){
      arr1.push(i)
    } else {
    arr2.push(i)
    }
  }
  console.log(" res", arr1, arr2); 
}

console.log(code([1, 2, 3, 4, 5, 6, 7, 8])); 