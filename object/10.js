var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245
  }
];

const sort = x => {
  let auth = [];
  for (i in x) {
    auth.push(x[i]["libraryID"]);
  }
  let sorted = [];
  let sortedId = auth.sort();

  for (i in )
};

console.log(sort(library));
