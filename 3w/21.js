//Write a JavaScript program to get every nth
//element in an given array.

const code = (num, arr) => {
  let counter = 1;
  let retArr = [];
  for (let i = 0; i < arr.length; i++) {
   
   while(arr.length > 0){
     if (counter === num){
       retArr.push(arr[i]); 
       counter++
     } else {
       counter++
     }
   }
   return retArr;
    // if (counter === num) {
    //   counter++;
    //   retArr.push(arr[i]);
    // }
    // counter++;
  }
 
};
console.log(code(2, [1, 2, 3, 4, 5, 6]));
