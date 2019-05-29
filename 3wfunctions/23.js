//Write a JavaScript function to find the first not repeated character.

const fn = (str) => {
  let dict = {}; 
  const spl = str.split("");
  for (const i of spl){
    if (!dict[i]){
      dict[i] = 1; 
    } else{
      dict[i]++
    }
  }
  
  console.log(Object.keys(dict).find(key => dict[key] === 1))
}

console.log(fn("jabacddbecr"));