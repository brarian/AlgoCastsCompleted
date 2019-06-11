const strong = pw => {
  const numbers = "0123456789";
  const lower_case = "abcdefghijklmnopqrstuvwxyz";
  const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const special_characters = "!@#$%^&*()-+";
  let count = 0;
  pw = pw.split("");
  let num = pw.filter(i => numbers.split("").includes(i)).length;
  let low = pw.filter(i => lower_case.split("").includes(i)).length;
  let up = pw.filter(i => upper_case.split("").includes(i)).length;
  let sp = pw.filter(i => special_characters.split("").includes(i)).length;

  if (num === 0) {
    count += 1;
  }
  if (low === 0) {
    count += 1;
  }
  if (up === 0) {
    count += 1;
  }
  if (sp === 0) {
    count += 1;
  }

  if (count + pw.length < 6) {
    return 6 - pw.length;
  }
  return count;
};

console.log(strong("Ab1"));
