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
      return;
    }
    if ((this.head.next = null)) {
      return;
    }
    let node = this.head;
    while (node.next !== null) {
      node = node.next;
    }
    node.next = null;
    return this.head;
  }
}

const ll = new LinkedList();
ll.enqueue(4);
ll.enqueue(5);

ll.dequeue();

console.log(ll);
