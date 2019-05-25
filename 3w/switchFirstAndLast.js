function switchStr(str){
  const container = str.split(""); 
  const first = container[0] 
  const last = container[container.length -1 ]; 
  container.splice(0,1);
  container.splice(-1);
  let res = container.join(""); 
  return [last, res, first].join("")
}

console.log(switchStr("apple"))