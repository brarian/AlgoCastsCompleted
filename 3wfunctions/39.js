//Write a JavaScript program to remove the key-value pairs
//corresponding to the given keys from an object.
const objectToM = {
  name: "dog",
  age: 2,
  color: "purple",
  weight: 123,
  girlDog: false,
  thingsItLikes: ["walks", "water", "naps"]
};
const remove = (obj, arr) => {
  arr.map(i => delete obj[i]);
  return objectToM;
};

console.log(remove(objectToM, ["name", "age", "color"]));
