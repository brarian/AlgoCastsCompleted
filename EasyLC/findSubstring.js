let src = [
  'minecraftgame',
  'intelligent',
  'innercrafttalent',
  'knife',
  'scissor',
  'stonecrafter'
];
function find(w) {
  let res = [];
  for (let i of src) {
    if (i.includes(w)) {
      res.push(i);
    }
  }
  return res;
}

find('craft');
