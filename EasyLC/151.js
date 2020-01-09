/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
     s = s.split(" ").filter(i => i !== ""); 
    console.log(s)
    let leftI = 0; 
    let rightI = s.length -1; 
    
    
    while (leftI < rightI){
        let temp = s[leftI]; 
        s[leftI] = s[rightI]
        s[rightI] = temp; 
        leftI++; 
        rightI--; 
    }
    
    return s.join(" ").trim()
};