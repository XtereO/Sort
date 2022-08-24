class Heap {
  items = [];
  getParentId = (childId) => {
    return Math.floor((childId - 1) / 2);
  };
  addItem = (item) => {
    this.items.push(item);
    let curId = this.items.length - 1;
    if (curId !== 0) {
      let parentId = this.getParentId(curId);
      while (this.items[curId] > this.items[parentId] && curId !== 0) {
        [this.items[curId], this.items[parentId]] = [
          this.items[parentId],
          this.items[curId],
        ];
        curId = parentId;
        parentId = this.getParentId(curId);
      }
    }
  };
  getMax = () => {
    return this.items[0] ?? null;
  };
  removeMax = () => {
    const lastId = this.items.length - 1;
    [this.items[0], this.items[lastId]] = [this.items[lastId], this.items[0]];
    this.items.pop();
    let curId = 0;
    let left = 2 * curId + 1;
    let right = 2 * curId + 2;
    while (left <= this.items.length) {
      if (
        this.items[left] > this.items[curId] &&
        (!this.items[right] || this.items[left] > this.items[right])
      ) {
        [this.items[left], this.items[curId]] = [
          this.items[curId],
          this.items[left],
        ];
        curId = left;
      } else if (
        this.items[right] &&
        this.items[right] > this.items[curId] &&
        this.items[right] > this.items[left]
      ) {
        [this.items[right], this.items[curId]] = [
          this.items[curId],
          this.items[right],
        ];
        curId = right;
      } else {
        break;
      }
      left = 2 * curId + 1;
      right = 2 * curId + 2;
    }
  };
  sort = (l) => {
    l.forEach((e) => this.addItem(e));
    let sortedL = [];
    while (this.items.length > 0) {
      sortedL = [this.getMax(), ...sortedL];
      this.removeMax();
    }
    return sortedL;
  };
}

const heap = new Heap();
const l = [2, 5, 1, 7, 3, 9, 43, 12, 13, 13, 54, 23, 11];
console.log(heap.sort(l));
