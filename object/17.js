//Write a JavaScript function to check if an object contains given property.

const fx = (obj, property) => {
  return Object.keys(obj).includes(property) ? true : false;
};

console.log(
  fx({ red: '#FF0000', green: '#00FF00', white: '#FFFFFF' }, 'green')
);

console.log(fx({}, ''));
