// Given an array of numbers and an index i, return the index of the nearest larger number of the number at index i, where distance is measured in array indices.
// For example, given [4, 1, 3, 5, 6] and index 0, you should return 3. 
// If two distances to larger numbers are the equal, then return any one of them. If the array at i doesn't have a nearest larger integer, then return null.
// Follow-up: If you can preprocess the array, can you do this in constant time?

function code(arr, index){
  let moreThanIndex  = arr.filter(i => i > arr[index]);
  if (!moreThanIndex){
    return null; 
  } 
  return arr.indexOf(Math.min(...moreThanIndex));
}
code([4, 1, 3, 5, 6], 0)