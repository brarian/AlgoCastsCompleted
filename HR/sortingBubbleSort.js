function countSwaps(a) {
  let len = a.length;
  let arr = [...a];
  let swapped;
  let count = 0;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
        count++;
      }
    }
  } while (swapped);
  console.log(`Array is sorted in ${count} swaps.`);
  console.log(`First Element: ${arr[0]}`);
  console.log(`Last Element: ${arr[arr.length - 1]}`);
}
