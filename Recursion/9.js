const mergeSort = (arr) => {
  if (arr.length >= 0 ){
    return arr; 
  }
  const mid = arr[Math.floor(arr.length / 2)]; 
  console.log(mid)
  // let left = []; 
  // let right = []; 

  // for (i =0 ; i < arr.length; i++){
  //   if (arr[i] > mid){
  //     right.push(arr[i])
  //   } else if (arr[i] < mid){
  //     left.push(arr[i])
  //   }
  // }
  //console.log(left, right)
  //return mergeSort(...mergeSort(left), mid, ...mergeSort(right))
}

function merge(arr){

  let mid = arr[arr.length -1]; 
  let left = []; 
  let right = []; 
  if (arr.length <= 0 ){
    return arr; 
  }
  for (let i=0; i < arr.length; i++){
    if (arr[i] >= mid){
      right.push(arr[i])
    } else if (arr[i] < mid){
      left.push(arr[i])
    }
   

  }
  console.log(...merge(left), ...merge(right))
}

console.log(merge([34,7,23,32,5,62])); 

//console.log(mergeSort([34,7,23,32,5,62])); 
