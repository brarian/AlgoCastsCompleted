function binarySearch(array, target) {
  // Write your code here.

  let bottomIndex = -1;
  let topIndex = array.length;

  while (bottomIndex + 1 < topIndex) {
    const distance = topIndex - bottomIndex;
    const halfDistance = Math.floor(distance / 2);

    const guessIndex = bottomIndex + halfDistance;

    const guessValue = array[guessIndex];

    if (guessValue === target) {
      return guessIndex;
    }
    if (guessValue > target) {
      topIndex = guessIndex;
    } else {
      bottomIndex = guessIndex;
    }
  }

  return -1;
}

// Do not edit the line below.
exports.binarySearch = binarySearch;

function binarySearch(array, target) {
  let bottomIndex = -1;
  let topIndex = array.length;

  while (bottomIndex + 1 < topIndex) {
    const distance = topIndex - bottomIndex;
    const halfDistance = Math.floor(distance / 2);

    const guessIndex = bottomIndex + halfDistance;

    const guessValue = array[guessIndex];

    if (guessValue === target) {
      return guessIndex;
    }
    if (guessValue > target) {
      topIndex = guessIndex;
    } else {
      bottomIndex = guessIndex;
    }
  }

  return -1;
}
