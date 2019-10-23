class Stack {
  constructor() {
    this.storage = [];
    this.count = 0;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }

    delete this.storage;
    return this.storage;
  }

  peek() {
    return this.storage[this.count - 1];
  }
}

let s = new Stack();
s.push(2);
s.push(15);
s.pop();

console.log(s.peek());
