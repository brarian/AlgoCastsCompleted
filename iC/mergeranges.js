function mergeRanges(meetings) {
  let timerange = [];
  meetings.sort((a, b) => a.startTime - b.startTime);
  if (meetings.length == 1) return meetings;
  for (let i = 0; i < meetings.length; i++) {
    if (meetings[i]['endTime'] >= meetings[i + 1]['startTime']) {
      timerange.push(
        `{startTime: ${meetings[i]['startTime']}, endTime: ${
          meetings[i + 1]['endTime']
        }`
      );
      i++;
    } else {
      timerange.push(meetings[i]);
    }
  }

  return timerange;
}
mergeRanges([
  { startTime: 1, endTime: 4 },
  { startTime: 2, endTime: 5 },
  { startTime: 5, endTime: 8 }
]);
