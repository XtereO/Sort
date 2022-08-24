class NodeTree {
  root = null;
  left = null;
  right = null;
  constructor(rootValue) {
    this.root = rootValue;
  }
}
class Tree {
  root = null;
  addNode = (value, curNode = this.root) => {
    if (this.root === null) {
      this.root = new NodeTree(value);
    } else if (value > curNode.root) {
      if (curNode.right === null) {
        curNode.right = new NodeTree(value);
      } else {
        return this.addNode(value, curNode.right);
      }
    } else {
      if (curNode.left === null) {
        curNode.left = new NodeTree(value);
      } else {
        return this.addNode(value, curNode.left);
      }
    }
  };
  inOrder = (curNode = this.root) => {
    let l = [];
    if (curNode !== null && curNode.left !== null) {
      l.push(...this.inOrder(curNode.left));
    }
    l.push(curNode.root);
    if (curNode !== null && curNode.right !== null) {
      l.push(...this.inOrder(curNode.right));
    }
    return l;
  };
  sort = (l) => {
    l.forEach((e) => this.addNode(e));
    return this.inOrder();
  };
}

const tree = new Tree();
const l = [2, 5, 1, 7, 3, 9, 43, 12, 13, 13, 54, 23, 11];
console.log(tree.sort(l));
