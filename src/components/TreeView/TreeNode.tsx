import { useState } from "react";
import type { TreeNodeData } from "./tree.types";
import { fetchChildren } from "../../data/treeMock";
import "./tree.css";

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
    if (!value?.trim()) return;

    setChildren((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name: value }
    ]);
    setExpanded(true);
  };

  const removeNode = () => {
    if (window.confirm("Delete this node and its children?")) {
      alert("Remove logic handled by parent in real app");
    }
  };

  return (
    <div className="tree-node">
      <div className="node-row">
        {node.hasChildren ? (
          <button className="expand-btn" onClick={toggle}>
            {expanded ? "−" : "+"}
          </button>
        ) : (
          <div style={{ width: 20 }} />
        )}

        {editing ? (
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setEditing(false)}
            autoFocus
          />
        ) : (
          <span
            className="node-name"
            onDoubleClick={() => setEditing(true)}
          >
            {name}
          </span>
        )}

        <div className="node-actions">
          <button className="action-btn" onClick={addChild}>＋</button>
          <button className="action-btn" onClick={removeNode}>🗑</button>
        </div>
      </div>

      {loading && <div className="loading">Loading...</div>}

      {expanded && (
        <div className="children">
          {children.map((child) => (
            <TreeNode key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
}
