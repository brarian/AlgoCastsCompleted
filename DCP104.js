//This problem was asked by Facebook. Given an array of integers in which two elements appear exactly once and all other elements appear exactly twice, find the two elements that appear only once. For example, given the array [2, 4, 6, 8, 10, 2, 6, 10], return 4 and 8. The order does not matter. Follow-up: Can you do this in linear time and constant space?

function code(arr){
  let dict = arr.reduce((charMap, char)=> {
    charMap[char] = (charMap[char] || 0 ) + 1; 
    return charMap; 
  }, {}); 
  let result = [];
  for ( i in dict){
    if (dict[i] === 1){
      result.push(parseInt(i))
    }
  }
  return result
}

code([2, 4, 6, 8, 10, 2, 6, 10]);