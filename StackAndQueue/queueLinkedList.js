class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = null;
    this.count = 0;
  }
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.count++;
      return this.head;
    }
    let tracker = this.head;

    while (tracker.next !== null) {
      tracker = tracker.next;
    }
    tracker.next = node;
    this.count++;

    return this.head;
  }
}

const ll = new LinkedList();
ll.add(3);
ll.add(17);
ll.add(5);

console.log(ll);
