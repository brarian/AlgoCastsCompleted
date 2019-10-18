function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  // Check if we're serving orders first-come, first-served

  let map = new Map();

  let res = [];
  for (i of takeOutOrders) {
    res.push(servedOrders.indexOf(i));
  }
  let sortedTakeout = [...res].sort((a, b) => a - b);

  let res1 = [];
  for (i of dineInOrders) {
    res1.push(servedOrders.indexOf(i));
  }
  let sortedDineIn = [...res1].sort((a, b) => a - b);

  if (res === sortedTakeout && res1 === sortedDineIn) {
    return true;
  }
  return false;
}
