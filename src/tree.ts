export function visitNodes(tree, fun) {
  function recur(node, depth) {
    fun(node, depth);
    if (node.children) {
      node.children.forEach((n) => {
        recur(n, depth + 1);
      });
    }
  }
  recur(tree, 0);
}

export function numDescendants(tree) {
  let num = 0;
  visitNodes(tree, () => {
    num++;
  });
  return num;
}
