//Write a JavaScript program to create a shallow clone of an object.
//shallow copy will duplciate the top level properties but the nested object is shared between the source and the copy 
//Any change made to any of the object's property applies to all references using the object.

let obj0 = {
  "name": "Brarian",  
  "age": 26, 
  "tall?": false, 
  "nextObj"  : {
    "name" : "Jean", 
    "age": 24, 
    "tall?" : false, 
    "nextObj" : {
      "name" : "Cliff", 
      "age": 13, 
      "tall?" : true,
    }
  }
}
function clone(obj){
  let b = Object.assign({}, obj); 
  return b;
}

console.log(clone(obj0))
console.log(b.nextObj.nextObj.age)