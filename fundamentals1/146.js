//Write a JavaScript program to create a shallow
//clone of an object.
// shallow copy  -a bitwise copy of an object is created that has an exact copy of the values in the original object || only memory address is copied
// deep copy - copies all fields and makes copes of dynamicallu allocated memory pointed to by the fields. a deep cop occues when an object is copied along with the oects to which it refers

//SHALLOW COPY
const obj = { dog: 'husky', name: 'max' };
const copy = Object.assign({}, obj);
const spreadCopy = { ...obj };
console.log(copy);
console.log(spreadCopy);
