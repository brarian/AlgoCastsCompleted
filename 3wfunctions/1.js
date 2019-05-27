//Write a JavaScript function that reverse a number.

const rev = (x) => {
  let arr = x.toString().split("");
  let rev = ""; 
 for (let i=0; i < arr.length; i++){
   rev = arr[i] + rev
 }
 return Number(rev)
}

console.log(rev(12345))
console.log(rev(32243))