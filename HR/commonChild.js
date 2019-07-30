function commonChild(s1, s2) {
  let rows = s1.length + 1;
  let cols = s2.length + 1;

  let grid = [];
  let maxL = 0;

  let rowItems = Array(cols).fill(0);
  grid.push(rowItems);

  for (let r = 1; r < rows; r++) {
    rowItems = [0];
    grid.push(rowItems);

    for (let c = 1; c < cols; c++) {
      if (s1[r - 1] === s2[c - 1]) {
        rowItems[c] = grid[r - 1][c - 1] + 1;
      } else {
        rowItems[c] = Math.max(grid[r][c - 1], grid[r - 1][c]);
      }

      if (rowItems[c] > maxL) {
        maxL = rowItems[c];
      }
    }
  }
  return maxL;
}

console.log(commonChild('abcd', 'abdc'));
