//Write a JavaScript function that generates a string id
// (specified length) of random characters.

const id = x => {
  let text = "";
  let char_list =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890";

  for (let i = 0; i < x; i++) {
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }
  return text;
};

console.log(id(3));
