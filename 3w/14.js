//Write a JavaScript program to replace the names 
//of multiple object keys with the values provided.
let obj1 = {"name": "Brarian", "size": 5.7, "old": true}; 
function code(obj){
  let dict ={}; 
  for ( i in obj){
    dict[obj[i]] = i;
   
  }
  return dict
}

console.log(code(obj1)); 