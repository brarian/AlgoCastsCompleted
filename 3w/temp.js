function temp(x){
   let split = x.toString().split("");
   if (split.includes("f")){
     return `${(parseInt(x) - 32) * 5/9 }C`; 
   }
   return `${Math.round((parseInt(x) * 1.8) + 32)}F`
}

console.log(temp("150f"))