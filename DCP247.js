// Given a binary tree, determine whether or not it is height-balanced. A height-balanced binary tree can be defined as one in which the heights of the two subtrees of any node never differ by more than one.
const fn = node => {
  let a = heightR(node) - heightL(node);
  console.log(a);
  if (a > 1) {
    return `not balanced`;
  }
  return `balanced`;
};

const heightL = node => {
  if (!node) return 0;
  let leftT = height(node.left);
  return leftT;
};

const heightR = node => {
  if (!node) return 0;
  let rightT = height(node.right);
  return rightT;
};
