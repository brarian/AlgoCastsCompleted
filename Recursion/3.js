// range 

const range = (x, y) => {
  if (y === x+1){
    return [x+ 1];
  } 
  let list = range(x, y-1); 
  list.push(y-1); 
  return list;
}
console.log(range(2, 10))