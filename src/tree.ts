import { TraceNode } from "./trace";

export function visitNodes(tree: TraceNode, fun: (tn: TraceNode, depth: number) => void) {
  function recur(node: TraceNode, depth: number) {
    fun(node, depth);
    if (node.children) {
      node.children.forEach((n) => {
        recur(n, depth + 1);
      });
    }
  }
  recur(tree, 0);
}

export function numDescendants(tree: TraceNode) {
  let num = 0;
  visitNodes(tree, () => {
    num++;
  });
  return num - 1;
}
