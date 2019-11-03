function sortScores(unorderedScores, highestPossibleScore) {
  // Sort the scores in O(n) time
  const scoreCounts = new Array(highestPossibleScore + 1).fill(0);

  unorderedScores.forEach(e => {
    scoreCounts[e]++;
  });

  const sortedScore = [];

  for (let score = highestPossibleScore; score >= 0; score--) {
    const count = scoreCounts[score];

    for (let time = 0; time < count; time++) {
      sortedScore.push(score);
    }
  }
}
