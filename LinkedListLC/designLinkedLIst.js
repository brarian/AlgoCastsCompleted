class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var MyLinkedList = function() {
  this.head = null;
};

MyLinkedList.prototype.add = function(val) {
  if (!this.head) {
    this.head = new Node(val);
    return this.head;
  }

  let node = this.head;
  while (node.next !== null) {
    node = node.next;
  }
  node.next = new Node(val);
  return this.head;
};
MyLinkedList.prototype.get = function(index) {
  if (index === 0) {
    return this.head.val;
  }
  let counter = 0;
  let node = this.head;
  while (counter < index) {
    node = node.next;
    counter++;
    if (counter == index) {
      return node.val;
    }
    if (node.next == null && index > counter) {
      return -1;
    }
  }
};

MyLinkedList.prototype.addAtHead = function(val) {
  let head = new Node(val);
  head.next = this.head;
  return head;
};

MyLinkedList.prototype.addAtTail = function(val) {
  if (!this.head) {
    return new Node(val);
  }
  let node = this.head;
  while (node.next !== null) {
    node = node.next;
  }
  node.next = new Node(val);
  return this.head;
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
  index = index - 1;
  let node = this.head;
  let counter = 0;
  while (node.next !== null) {
    if (counter === index) {
      let newNode = new Node(val);
      node.next = newNode;
      newNode.next = node.next;
      return this.head;
    }
    node = node.next;
    counter++;
  }
  return -1;
};
MyLinkedList.prototype.deleteAtIndex = function(index) {
  let node = this.head;
  let counter = 0;
  if (index == 0) {
    this.head = this.head.next;
    return this.head;
  }
  while (node.next !== null) {
    if (counter == index - 1) {
      node.next = node.next.next;
      return this.head;
    }
    node = node.next;
    return this.head;
  }
};

const ll = new MyLinkedList();
ll.add(5);
ll.add(6);
ll.add(9);
ll.add(1);
ll.add(2);
console.log(ll.deleteAtIndex(2));
console.log(ll.get(3));
