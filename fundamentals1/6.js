//Write a JavaScript program to target a given value in a
//nested JSON object, based on the given key.

const data = {
  a: 'a',
  level1: {
    level2: {
      level3: 'some data'
    }
  }
};

const fn = (obj, key) => {
  return key in obj
    ? obj[key]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === 'object') return fn(val, key);
      }, undefined);
};

console.log(fn(data, 'level2'));
