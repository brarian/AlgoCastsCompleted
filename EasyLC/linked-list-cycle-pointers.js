var hasCycle = function(head) {
  if (head == null || head.next == null) {
    return false;
  }
  let slow = head;
  let fast = head.next;

  while (slow != fast) {
    if (fast == null || fast.next == null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};

//time complexity - o(n) - best case no cycle
//worst case o(n+k) --> distance between 2 runners / difference of speed - the distance is at most cyclic length k
//number of iterations - cyclic length K
