var wordPattern = function(pattern, str) {
  str = str.split(" ")
  if (str.length !== pattern.length) return false;
 let ss = {}
  for (let i = 0; i < str.length; i++){
     if (!ss[pattern[i]]){
         ss[pattern[i]] = str[i]
     }
 } 
  let objVals = Array.from( new Set(Object.values(ss))).length;
  let objKeys = Object.keys(ss).length
  if (objVals !== objKeys){
      return false
  }
  let newStr = ""; 
  for (let i=0; i < pattern.length; i++){
      newStr += ss[pattern[i]] + " "
  }
  
   return (newStr.trim() === str.join(" ")) ? true : false; 