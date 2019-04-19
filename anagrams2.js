//Write an algorithm to group a list of words into anagrams. 
// For example, if the input was 
// ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], 
// the output should be: 
// [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].


function ana(arr){
  let res = [];
  // sort each word alphabetically 
  for (i in arr){
    res.push(arr[i].split("").sort().join(""))
  }

  //create a map for the sorted words 
  let map = {};
  // for each sorted word add to the the map  
  for (i=0; i < res.length; i++){
    let element = res[i]; 
    if (!map[element]){
      //instead of counting add the [index] of each word that is a duplicate 
      // we want to keep an array of indexes for each duplicate
      map[element] = [i]
    } else {
      // add remaining dup indexes to [i]
      map[element].push(i)
    }
  }
  let ans = [];
  console.log(map)


  //what map looks like after adding indexes => { aest: [ 0, 4, 5 ], acrs: [ 1, 3 ], acer: [ 2, 6 ] }
  for (i in map){
    //map each map{} item to the element in the original array 
   ans.push(map[i].map(i => arr[i])); 
  }
  console.log(ans)
  

}

ana(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']);