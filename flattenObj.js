let a = {
  "key": 3,
  "foo": {
      "a": 5,
      "bar": {
          "baz": 8
      }
  }
}

const flatten = (obj, prefix = '') => 
Object.keys(obj).reduce((acc, k)=> {
  const pre  = prefix.length ? prefix + ".": " "; 
  if (typeof obj[k]=== "object"){
    Object.assign(acc, flatten(obj[k], pre +k)); 
  }
  else acc[pre+k] = obj[k]; 
  return acc; 

}, {}); 

console.log(flatten(a));