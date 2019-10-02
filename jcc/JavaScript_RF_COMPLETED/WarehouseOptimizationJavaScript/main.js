/*
 * WAREHOUSE OPTIMIZATION
 *
 * Please do not post your solution to this problem online (Git, etc.) Please keep the solution
 * in Dropbox folder we shared with you.
 *
 * At ACME warehouse the warehouse manager has observed orders taking a long time to pick and
 *  believes that moving more popular items to easier to access locations may help.
 *
 * - Workers pick an order by placing items on a pallet at the dock door.
 * - Products are stored (inefficiently) in a single aisle with multiple shelves.
 * - As the shelf number increases, it is located further down the aisle and
 *   further away from the dock door.
 * - On average it takes 5*X seconds for a warehouse worker to retrieve an item
 *   from shelf X and place it on the pallet.
 * - A warehouse worker can only carry a single item at a time.
 * - A shelf can only hold one type of item.
 *
 * Which items should be on which shelves to optimize picking speed based on
 *  yesterday's orders?
 *
 * Example table contents:
 *
 *   Shelf 1:      Item 12
 *   Shelf 2:      Item 11
 *   Shelf 3:      Item 10
 *   Shelf 4:      Item 09
 *   Shelf 5:      Item 08
 *   Shelf 6:      Item 07
 *   Shelf 7:      Item 06
 *   Shelf 8:      Item 05
 *   Shelf 9:      Item 04
 *   Shelf 10:     Item 03
 *   Shelf 11:     Item 02
 *   Shelf 12:     Item 01
 *
 * Display the shelf and item pairings by calling the following function:
 *   displayShelfItemPair(shelfName, itemName);
 *
 */
function main() {
  var orderRepo = new OrderRepository();

  let mockOrder = orderRepo.getYesterdaysOrders();

  //merging all orders from yesterdat together
  //need total count to find what is needed on top shelf
  let allOrders = [].concat.apply([], mockOrder.map(i => [...i.orderLines]));

  //map of items key-item name, value - how many times item was retrieved
  const quantitySum = sortItemsAsc(allOrders);

  //sorts Map so by item retireved most descending list
  const itemName = [...quantitySum]
    .sort((a, b) => b[1] - a[1])
    .map(item => item[0]);

  //returns itemName and correct place on the shelf
  for (let i = 0; i < itemName.length; i++) {
    displayShelfItemPair(`Shelf ${i + 1}:`, itemName[i]);
  }
}

//returns a Map returns item ==> total number of times it had to be retrived yesterday
function sortItemsAsc(allItems) {
  let quantSummation = new Map();
  for (let i = 0; i < allItems.length; i++) {
    let name = allItems[i].itemName;
    let quantity = allItems[i].quantity;

    if (!quantSummation.has(name)) {
      quantSummation.set(name, quantity);
    } else if (quantSummation.has(name)) {
      let sum = quantSummation.get(name);
      sum += quantity;
      quantSummation.set(name, sum);
    }
  }
  return quantSummation;
}
