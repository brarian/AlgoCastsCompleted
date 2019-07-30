function processData(input) {
  let arr = input.split('\n');
  arr.map(i => {
    let even = '';
    let odd = '';

    Array.from(i).filter((letter, index) => {
      if (index % 2 === 0) {
        even += letter;
      } else {
        odd += letter;
      }
    });
    console.log(even.concat(' ', odd));
  });
}

console.log(processData('Hacker Rank'));
