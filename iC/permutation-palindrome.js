function hasPalindromePermutation(theString) {
  // Check if any permutation of the input is a palindrome

  let map = {};
  for (let i of theString) {
    if (!map[i]) {
      map[i] = 1;
    } else {
      map[i]++;
    }
  }

  let mods = Object.values(map);
  let lens = mods.filter(i => i % 2 != 0).length;

  if (lens > 1) {
    return false;
  }
  return true;
  return false;
}

function palindrome(theString) {
  let unique = new Set();

  for (let i of theString) {
    if (!unique.has(i)) {
      unique.add(i);
    } else {
      unique.delete(i);
    }
  }
  if (unique.size > 1) {
    return false;
  }
  return true;
}
