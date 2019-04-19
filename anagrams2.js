//Write an algorithm to group a list of words into anagrams. 
// For example, if the input was 
// ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], 
// the output should be: 
// [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].


function ana(arr){
  let res = [];
  for (i in arr){
    res.push(arr[i].split("").sort().join(""))
  }
  let map = {};
  for (i=0; i < res.length; i++){
    let element = res[i]; 
    if (!map[element]){
      map[element] = [i]
    } else {
      map[element].push(i)
    }
  }
let ans = [];

  for (i in map){
   ans.push(map[i].map(i => arr[i])); 
  }
  console.log(ans)
  

}

ana(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']);