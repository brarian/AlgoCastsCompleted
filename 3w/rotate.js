function reduce(str){
  let split = str.split("");
  let rev = ""
  for (i in split){
    rev = split[i] + rev
  }
  return rev
}

console.log(reduce('w3resource'));