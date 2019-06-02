function binaryS(arr, x){

  let start = 0;
  let end = arr.length - 1;
  if (start > end ) return false; 

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === x) return true;

  if (arr[mid] > x){
    return binaryS(arr, x, start, mid -1); 
  } else {
    return binaryS(arr, x, mid+1, end)
  }
};

console.log(binaryS([1, 3, 5, 7, 8, 9], 8));
