const year = x => {
  if (x % 400 === 0) {
    return true;
  }
  if (x % 100 !==0 && x%4 ===0){
  return true;
  } 
  else return false;
};

console.log(year(2016));
