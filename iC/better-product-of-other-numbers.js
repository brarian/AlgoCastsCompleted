function allInts(intArray) {
  const results = [];

  let productSoFar = 1;
  for (let i = 0; i < intArray.length; i++) {
    results[i] = productSoFar;
    productSoFar *= intArray[i];
  }
  productSoFar = 1;
  for (let j = intArray.length - 1; j >= 0; j--) {
    results[j] *= productSoFar;
    productSoFar *= intArray[j];
  }

  return results;
}
