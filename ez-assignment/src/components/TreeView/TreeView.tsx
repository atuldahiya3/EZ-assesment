import { useState } from "react";
import type { TreeNodeData } from "./tree.types";
import TreeNode from "./TreeNode";

interface Props {
  data: TreeNodeData[];
}

export default function TreeView({ data }: Props) {
  const [tree, setTree] = useState<TreeNodeData[]>(data);

  return (
    <div>
      {tree.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
}
