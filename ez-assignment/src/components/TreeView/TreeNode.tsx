import { useState } from "react";
import type { TreeNodeData } from "./tree.types";
import { fetchChildren } from "../../data/treeMock";

interface Props {
  node: TreeNodeData;
}

export default function TreeNode({ node }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [children, setChildren] = useState<TreeNodeData[]>(node.children || []);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(node.name);

  const toggle = async () => {
    if (!expanded && node.hasChildren && children.length === 0) {
      setLoading(true);
      const data = await fetchChildren(node.id);
      setChildren(data);
      setLoading(false);
    }
    setExpanded(!expanded);
  };

  const addChild = () => {
    const value = prompt("Enter node name");
    if (!value) return;

    setChildren((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name: value }
    ]);
    setExpanded(true);
  };

  const removeNode = () => {
    if (window.confirm("Delete this node and its children?")) {
      alert("In real app this would be removed from parent state");
    }
  };

  return (
    <div style={{ marginLeft: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {node.hasChildren && (
          <button onClick={toggle} disabled={loading}>
            {expanded ? "-" : "+"}
          </button>
        )}

        {editing ? (
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setEditing(false)}
            autoFocus
          />
        ) : (
          <span onDoubleClick={() => setEditing(true)}>{name}</span>
        )}

        <button onClick={addChild}>＋</button>
        <button onClick={removeNode}>🗑</button>
      </div>

      {loading && <div>Loading...</div>}

      {expanded &&
        children.map((child) => (
          <TreeNode key={child.id} node={child} />
        ))}
    </div>
  );
}
