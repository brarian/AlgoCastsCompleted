//Write a JavaScript program to get an array of elements that appear in both arrays.
function code(arr, arr1){
  let res = []; 
  for (let i=0; i < arr.length; i++){
    if (arr1.includes(arr[i])){
      res.push(arr[i]); 
    }
  }
  return res

}

console.log(code([1, 2, 3, 4], [5, 2, 3, 9])); 