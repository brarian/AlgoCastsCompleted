class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(input) {
    const node = new Node(input);

    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if (!this.first) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

let nQ = new Queue();
nQ.enqueue(2);
nQ.enqueue(27);
nQ.enqueue(16);
nQ.enqueue(7);
nQ.dequeue();
nQ.dequeue();
nQ.dequeue();

console.log(nQ);
