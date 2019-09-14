//Write a JavaScript function to split a string and convert it into an array of words. Go to the editor
function spl(input) {
  return input.length > 0 ? input.split(' ') : -1;
}

console.log(spl('Robin Singh"'));
