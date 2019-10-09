function cd(myArray, alicesArray) {
  let merged = [];
  let myArrayTracker = 0;
  let alArrayTracker = 0;
  let total = myArray.length + alicesArray.length;

  if (myArray[myArrayTracker] < alicesArray[alArrayTracker]) {
    merged.push(myArray[myArrayTracker]);
    myArrayTracker++;
  } else if (myArray[myArrayTracker] > alicesArray[alArrayTracker]) {
    merged.push(alicesArray[alArrayTracker]);
    alArrayTracker++;
  }
  if (!myArray.length) {
    merged.push(alicesArray.splice(alArrayTracker));
    return merged;
  }

  return merged;
}
