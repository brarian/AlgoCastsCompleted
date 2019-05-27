//Write a JavaScript function which returns the n
//rows by n columns identity matrix

const matrix = (a, b) => {
  let arr = [];
  for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= b; j++) {
      arr.push(j * i);
    }
  }
  chunk(arr, b);
};

const chunk = (arr1, size) => {
  let newArr = [];
  while (arr1.length > 0) {
    newArr.push(arr1.slice(0, size));
    arr1 = arr1.slice(size);
  }
  console.log(newArr);
};

console.log(matrix(3, 4));
