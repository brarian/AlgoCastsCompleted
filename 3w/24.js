//Write a JavaScript program to dcapitalize the first letter of a string

const l = (arr) => {
  let spl = arr.split(" "); 
  console.log(spl)
  let str=""
  for (let i=0; i < spl.length; i++){
   str += spl[i].substr(0, 1).toLowerCase() + spl[i].substr(1) + " "; 
  }
  return str
}


console.log(l("My Phone is Broken"))