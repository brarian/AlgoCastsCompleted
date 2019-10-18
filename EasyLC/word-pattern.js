var wordPattern = function(pattern, str) {
  str = str.split(' ');
  let mapP = {};
  let mapS = {};

  if (str.length !== pattern.length) {
    return false;
  }

  for (let i in pattern) {
    if (mapP[pattern[i]] == undefined && mapS[str[i]] == undefined) {
      mapP[pattern[i]] = str[i];
      mapS[str[i]] = pattern[i];
    } else if (mapP[pattern[i]] !== str[i] || mapS[str[i]] !== pattern[i]) {
      return false;
    }
    return true;
  }
};
