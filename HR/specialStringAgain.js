// const specialString = s => {
//   const a = getSubStrings(s);
//   let counter = 0;
//   for (let i = 0; i <= a.length; i++) {
//     if (s.includes(a[i]) && palindrome(a[i]) && unique(a[i])) {
//       counter++;
//     }
//   }
//   return counter;
// };
// const getSubStrings = s => {
//   let arr = [];
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j < s.length + 1; j++) {
//       arr.push(s.slice(i, j));
//     }
//   }
//   return arr;
// };

// const palindrome = str => {
//   let rev = str
//     .split('')
//     .reverse()
//     .join('');
//   return str === rev ? true : false;
// };

// const unique = s => {
//   let numOfLetters = Array.from(new Set(s));
//   return numOfLetters.length > 2 ? false : true;
// };

function specialString(n, s) {
  let history = [];
  let historyCount = 0;

  let historyItem = [s[0], 1];

  let palindromeCount = 0;

  for (let i = 1; i < n; i++) {
    if (s[i] == historyItem[0]) historyItem;
  }
}

console.log(
  specialString(
    'ccacacabccacabaaaabbcbccbabcbbcaccabaababcbcacabcabacbbbccccabcbcabbaaaaabacbcbbbcababaabcbbaaababababbabcaabcaacacbbaccbbabbcbbcbacbacabaaaaccacbaabccabbacabaabaaaabbccbaaaabacabcacbbabbacbcbccbbbaaabaaacaabacccaacbcccaacbbcaabcbbccbccacbbcbcaaabbaababacccbacacbcbcbbccaacbbacbcbaaaacaccbcaaacbbcbbabaaacbaccaccbbabbcccbcbcbcbcabbccbacccbacabcaacbcaccabbacbbccccaabbacccaacbbbacbccbcaaaaaabaacaaabccbbcccaacbacbccaaacaacaaaacbbaaccacbcbaaaccaabcbccacaaccccacaacbcacccbcababcabacaabbcacccbacbbaaaccabbabaaccabbcbbcaabbcabaacabacbcabbaaabccabcacbcbabcbccbabcabbbcbacaaacaabbbabbaacbbacaccccabbabcbcabababbcbaaacbaacbacacbabbcacccbccbbbcbcabcabbbcaabbaccccabaabbcbcccabaacccccaaacbbbcbcacacbabaccccbcbabacaaaabcccaaccacbcbbcccaacccbbcaaaccccaabacabcabbccaababbcabccbcaccccbaaabbbcbabaccacaabcabcbacaccbaccbbaabccbbbccaccabccbabbbccbaabcaabcabcbbabccbaaccabaacbbaaaabcbcabaacacbcaabbaaabaaccacbaacababcbacbaacacccacaacbacbbaacbcbbbabccbababcbcccbccbcacccbababbcacaaaaacbabcabcacaccabaabcaaaacacbccccaaccbcbccaccacbcaaaba'
  )
);
