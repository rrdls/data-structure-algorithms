class Queue {
  constructor() {
    this._count = 0;
    this._lowestCount = 0;
    this._items = {};
  }

  enqueue(element) {
    this._items[this._count] = element;
    this._count++;
  }

  dequeue() {
    const firstElementInQueue = this._items[this._lowestCount];
    delete this._items[this._lowestCount];
    this._count--;
    this._lowestCount++;
    if (this.isEmpty()) {
      this._lowestCount = 0;
    }
    return firstElementInQueue;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._items[this._lowestCount];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this._count;
  }

  clear() {
    this._count = 0;
    this._lowestCount = 0;
    this._items = {};
  }

  toString() {
    let objString = `${this.peek()}`;
    for (let i = this._lowestCount + 1; i < this.size(); i++) {
      objString = `${objString},${this._items[i]}`;
    }
    return objString;
  }
}
console.time();
const queue = new Queue();

queue.enqueue("Renato");
queue.enqueue("Ramos");
queue.dequeue();

console.log(queue.toString());

console.timeEnd();
