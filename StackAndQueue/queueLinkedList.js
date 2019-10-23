class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  enqueue(el) {
    if (this.head === null) {
      this.head = new Node(el);
      return this.head;
    }
    let newNode = new Node(el);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }
  dequeue() {
    if (!this.head) {
      return null;
    }
    if (this.head.next === null) {
      return null;
    }
    let first = this.head;
    let second = this.head.next;
    while (second.next !== null) {
      first = second;
      second = second.next;
    }
    first.next = null;
    return this.head;
  }
}

const ll = new LinkedList();
ll.enqueue(4);
ll.enqueue(5);
ll.enqueue(15);
ll.enqueue(17);
ll.dequeue();
console.log(ll);
