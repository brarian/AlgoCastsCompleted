//incomplete
function code(arr){
  let a =  pullOutofArr(arr);
  if (a.length  < 1 || a < 0 || isNaN(a)){
    return null;
  }

  let plusOne = (a)
  console.log("sdfdsfdsfdf", plusOne)
  let strArr = plusOne.toString().split("");
  
  
  let nums = strArr.map(i => Number(i))
  return nums
  
}

function pullOutofArr(vals){
  let res = ""; 
  if (vals.length == 0) return NaN
  for (val of vals){
     console.log(val)
    if (val > 9){
      return [];
    }
    else res = res + val
  }
  return res
}

code([ 9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7 ]); 