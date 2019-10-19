function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  // Check if we're serving orders first-come, first-served
  if (servedOrders.length === 0) {
    return true;
  }
  if (takeOutOrders[0] === servedOrders[0]) {
    return isFirstComeFirstServed(
      takeOutOrders.slice(1),
      dineInOrders,
      servedOrders.slice(1)
    );
  } else if (dineInOrders[0] === servedOrders[0]) {
    return isFirstComeFirstServed(
      dineInOrders.slice(1),
      takeOutOrders,
      servedOrders.slice(1)
    );
  } else {
    return false;
  }
  return true;
}
