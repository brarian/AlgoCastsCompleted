/**
 ******************
 * INSTRUCTIONS:
 ******************
 *
 * The code below is to find what items may be missing for an order.
 * We know the Bin Quantities. We know the item details from the order.
 *
 * We need to compare the quantities needed for the order against
 * what exists in the bin, and find any shortages that may prevent
 * the order from going through.
 * Display only those shortages so the user can get them corrected.
 * Lines that have enough quantity to be fulfilled should not be displayed
 *
 * There are multiple bugs that prevents this code from displaying correctly,
 * as well as a possible enhancement. Find the issues and correct them as best as you can.
 *
 * Once all the bugs are corrected, the below results should display.
 *
 * EXPECTED RESULT:
 * [
 *  {line: "1", item: "shoes", bin: "BIN_A_101", quantity: "5", shortage: -1},
 *  {line: "2", item: "shirts", bin: "BIN_A_102", quantity: "7", shortage: -6},
 *  {line: "3", item: "pants", bin: "BIN_A_101", quantity: "3", shortage: -1},
 *  {line: "4", item: "socks", bin: "BIN_B_201", quantity: "20", shortage: -19},
 *  {line: "5", item: "belts", bin: "BIN_B_203", quantity: "10", shortage: -10}
 * ]
 *
 */

function main() {
  var orderRepo = new OrderRepository();
  var orderItemData = orderRepo.getOrderItemData();
  var binItemQuantities = orderRepo.getBinItemQuantities();

  // Display Order Data
  // uncomment below line if needed to display Order Data on html page
  displayOrderItemData(orderItemData);

  // Display Bin Quantities
  // uncomment below line if needed to display Bin Quantities on html page
  displayBinItemQuantities(binItemQuantities);

  var items = {};

  //looping through our item data to find items in each order
  for (var i in orderItemData) {
    var line = orderItemData[i];

    if (!items[line.line]) {
      items[line.line] = {
        item: line.item,
        bin: line.preferredbin,
        quantity: line.quantity
      };
    }
    for (var b in binItemQuantities) {
      var bin = binItemQuantities[b];
      if (bin.bin != line.preferredbin) {
        items[line.line].shortage = 0 - line.quantity;
      }
    }

    for (var b in binItemQuantities) {
      var bin = binItemQuantities[b];
      if (bin.bin == line.preferredbin && bin[line.item] <= line.quantity) {
        items[line.line].shortage = bin[line.item] - line.quantity;
        if (items[line.line].shortage >= 0) {
          delete items[line.line];
        }
      }
    }
  }

  var shortItems = Object.keys(items).map(line => {
    return {
      line: line,
      item: items[line].item,
      bin: items[line].bin,
      quantity: items[line].quantity,
      shortage: items[line].shortage
    };
  });

  // Used to display the shortages
  // shortItems should be an array of objects mirroring the expected result
  displayShortages(shortItems);
}
