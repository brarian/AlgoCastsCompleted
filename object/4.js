var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
  }
];

const status = obj => {
  for (i in obj) {
    if (obj[i]["readingStatus"] == true) {
      console.log(`Already read ${obj[i]["title"]} by ${obj[i]["author"]}`);
    } else {
      console.log(`Have not read ${obj[i]["title"]} by ${obj[i]["author"]}`);
    }
  }
};

console.log(status(library));
