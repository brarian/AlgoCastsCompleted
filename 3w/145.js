//Write a JavaScript program to randomize the order 
//of the values of an array, returning a new array.

function randomShuffle(arr){
  let currentIndex = arr.length; 
  let temp; 
  let random; 

  //while there are elements to shuffle 
  while (0 !== currentIndex){

    //pick a remaining element
    random = Math.floor(Math.random() * currentIndex); 
    currentIndex -= 1; 

     //swap it with the current value 
  temp = arr[currentIndex]; 
  arr[currentIndex] = arr[random]; 
  arr[random] = temp;

  }
  return arr;
 
}


console.log(randomShuffle([1, 3, 6, 7, 9]))