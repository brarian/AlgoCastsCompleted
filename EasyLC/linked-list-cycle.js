var hasCycle = function(head) {
  let seen = new Set();

  while (head != null) {
    if (seen.has(head)) {
      return true;
    } else {
      seen.add(head);
    }
    head = head.next;
  }

  return false;
};

//time - o(n) visit all nodes at most once
//space - o(n) space depends on the number of elements added to the hash table
