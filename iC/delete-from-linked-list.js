function deleteNode(nodeToDelete) {
  // Delete the input node from the linked list

  let nextNode = nodeToDelete.next;

  if (nextNode) {
    nodeToDelete.value = nextNode.value;
    nodeToDelete.next = nextNode.next;
  }
}
