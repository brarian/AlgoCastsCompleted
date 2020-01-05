// 237. Delete Node in a Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  //1. make the node value equal the node's next value
  //2. make the node's next value equal the next node
  node.val = node.next.val;
  node.next = node.next.next;
};
