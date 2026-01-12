import { useState } from "react";
import type { Card } from "./kanban.types";
import "./kanban.css";

interface Props {
  card: Card;
  onDelete: () => void;
  onEdit: (title: string) => void;
}

export default function CardView({ card, onDelete, onEdit }: Props) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(card.title);

  const save = () => {
    if (!value.trim()) return;
    setEditing(false);
    onEdit(value);
  };

  return (
    <div className="card">
      {editing ? (
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={save}
          onKeyDown={(e) => e.key === "Enter" && save()}
          autoFocus
        />
      ) : (
        <p onDoubleClick={() => setEditing(true)}>{card.title}</p>
      )}

      <div className="card-actions">
        <button onClick={onDelete}>🗑</button>
      </div>
    </div>
  );
}
