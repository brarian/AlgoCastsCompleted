//https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

const code = (string1, string2) => {
  const dict = {}; 
  for (const i of string1.split("")){
    if (!dict[i]){
      dict[i] = 1; 
    }
    else {
      dict[i]++;  
    }
  }

  const dict2 = {}; 
  for (const i of string2.split("")){
    if (!dict2[i]){
      dict2[i] = 1; 
    }
    else {
      dict2[i]++;  
    }
  }

 let str1 = string1.split(""); 
 let str2 = string2.split(""); 

 
}





console.log(code("brarian", "jean"))