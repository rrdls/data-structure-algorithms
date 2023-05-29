class Deque {
  constructor() {
    this._count = 0;
    this._lowestCount = 0;
    this._items = {};
  }

  addFront(element) {
    if (this._count === 0) {
      this.addBack(element);
    } else if (this._lowestCount > 0) {
      this._items[this._lowestCount - 1] = element;
      this._lowestCount--;
    } else {
      for (let i = this._count; i > 0; i--) {
        console.log(i);
        this._items[i] = this._items[i - 1];
      }
      this._count++;
      this._lowestCount = 0;
      this._items[this._lowestCount] = element;
    }
  }

  addBack(element) {
    this._items[this._count] = element;
    this._count++;
  }

  toString() {
    let objString = `${this._items[this._lowestCount]}`;
    for (let i = this._lowestCount + 1; i < this._count; i++) {
      objString = `${objString},${this._items[i]}`;
    }
    return objString;
  }
}

const deque = new Deque();
deque.addFront("Ramos");
deque.addFront("Renato");
console.log(deque.toString());
