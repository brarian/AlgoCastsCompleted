function countTriplets(arr, r) {
  // for (let i = 1; i < arr.length; i++) {
  //   if (
  //     arr[i - 1] ||
  //     ((arr[i - 2] * r === arr[i] && arr[i] * r === arr[i + 1]) || arr[i + 2])
  //   ) {
  //     console.log(arr[i - 1], arr[i], arr[i + 1]);
  //     counter++;
  //   }
  //   if (arr[i - 2] * r === arr[i] && arr[i] * r === arr[i + 2]) {
  //     console.log(arr[i - 1], arr[i], arr[i + 1]);
  //     counter++;
  //   }
  // }
  // return counter;
  let map1 = {};
  let map2 = {};

  let found = 0;

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (map2[val]) {
      found += map2[val];
    }

    if (map1[val]) {
      let exp = val * r;
      if (map2[exp]) {
        map2[val] += map[val];
      } else {
        map2[exp] = map1[val];
      }
    }

    let exp2 = val * r;
    if (map1[exp2]) {
      map1[exp2] += 1;
    } else {
      map1[exp2] = 1;
    }
  }
  return found;
}
console.log(countTriplets([1, 3, 9, 9, 27, 81], 5));
