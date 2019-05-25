function code(arr){
  const len = arr.length; 
  return arr[Math.floor(Math.random()*len)]; 
}

console.log(code([1, 2, 3]))