function mergeRanges(meetings) {
  if (meetings.length == 1) return meetings;

  let sortedMeetings = meetings.sort((a, b) => a.startTime - b.startTime);
  const mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < meetings.length; i++) {
    const currentMeeting = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(
        lastMergedMeeting.endTime,
        currentMeeting.endTime
      );
    } else {
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}

mergeRanges([
  { startTime: 1, endTime: 4 },
  { startTime: 2, endTime: 5 },
  { startTime: 5, endTime: 8 }
]);
