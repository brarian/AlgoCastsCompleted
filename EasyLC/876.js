/** Middle of the Linked List

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let count = 0;
  let node = head;
  while (node) {
    count++;
    node = node.next;
  }
  let middle;
  if (count % 2 == 0) {
    middle = Math.ceil(count / 2);

    let temp = 0;
    let newNode = head;
    while (temp < middle) {
      temp++;
      newNode = newNode.next;
    }
    return newNode;
  }
  if (count % 2 !== 0) {
    middle = Math.ceil(count / 2);

    let temp = 1;
    let newNode = head;
    while (temp < middle) {
      temp++;
      newNode = newNode.next;
    }
    return newNode;
  }
  console.log(middle);
};
