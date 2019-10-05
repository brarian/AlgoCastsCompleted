function reverse(n) {
  let rev = '';
  for (let i = n.length - 1; i >= 0; i--) {
    rev += n[i];
  }
  return rev;
}
reverse('hello');

function reverse(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    right--;
    left++;
  }
}
