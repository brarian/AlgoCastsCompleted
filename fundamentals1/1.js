//Write a JavaScript program to compare two objects to
//determine if the first one contains equivalent property values to the second one.

const obj1 = { age: 26, hair: 'long', beard: true };

const obj2 = { age: 26, hair: 'long', beard: true };

const fn = (one, two) => {
  let counter = 0;
  for (let i in one) {
    for (let i in two) {
      if (one[i] !== two[i]) counter++;
    }
    return counter > 0 ? 'Not Equal' : 'Equal';
  }
};

console.log(fn(obj1, obj2));
