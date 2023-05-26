class Stack {
  constructor() {
    this._count = 0;
    this._items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }
  pop() {
    this.count--;
    const item = this.items[this.count];
    delete this.items[this.count];
    return item;
  }
  peek() {
    return this.items[this.count - 1];
  }
  isEmpty() {
    return this.count === 0;
  }
  clear() {
    this.items = {};
    this.count = 0;
  }
  size() {
    return this.count;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }

    let s = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      s = `${s},${this.items[i]}`;
    }
    return s;
  }
}

const s = new Stack();

s.push(1);
s.push(2);
console.log(s.toString());
