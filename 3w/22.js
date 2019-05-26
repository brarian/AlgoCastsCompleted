//Write a JavaScript program to filter out the
// non-unique values in an array.

let unique = (arr) => {
  let unq = []; 
  // arr.filter(i => {
  //   if (arr.lastIndexOf(arr[i]) !== i){
  //     unq.push(i)
  //   }
  // })
  // return unq

  for (let i of arr){
    console.log(i)
  }
}

console.log(unique([1, 2, 2, 3, 3, 3, 4, 5, 5]));