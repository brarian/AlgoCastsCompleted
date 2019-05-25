function code(str) {
  let spl = str.split("");
  let hash = 0; 
  for (let i = 0; i < spl.length - 1; i++) {
    hash += spl[i].charCodeAt(0); 
  }
  return hash; 
}


console.log(code("ban"))
