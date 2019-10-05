function canTwoMoviesFillFlight(movieLengths, flightLength) {
  // Determine if two movie runtimes add up to the flight length

  let tracker = new Set();
  for (let i of movieLengths) {
    if (tracker.has(flightLength - i)) {
      return true;
    } else if (!tracker.has(i)) {
      tracker.add(i);
    }
  }

  return false;
}
