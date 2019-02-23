//Assume we are dealing with an environment which could 
//only store integers within the 32-bit signed integer range: 
//[−231,  231 − 1]. For the purpose of this problem, 
//assume that your function returns 0 when the reversed integer overflows. 
var reverse = function(x) {
    const max = Math.pow(2, 31) -1;
   const min = Math.pow(2, 31) * -1;
       
       let r = 0; 
       let s = "";
       let signed = 1;
       
       if (x >= max || x <= min){
           return 0;
       }
       
       s = String(x).split("").reverse();
       if (s[s.length -1] == "-"){
           signed *= -1;
           s.pop();
       }
       
       r = signed*Number(s.join(""));
       return (r >= max || r <= min) ? 0 : r; 
   };