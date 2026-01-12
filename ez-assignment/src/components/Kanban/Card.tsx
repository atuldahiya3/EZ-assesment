import { useState } from "react";
import type { Card } from "./kanban.types";

interface Props {
  card: Card;
  onDelete: () => void;
  onEdit: (title: string) => void;
}

export default function CardView({ card, onDelete, onEdit }: Props) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(card.title);

  const save = () => {
    setEditing(false);
    onEdit(value);
  };

  return (
    <div style={{ padding: 8, border: "1px solid #ccc", marginBottom: 8 }}>
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

      <button onClick={onDelete}>🗑</button>
    </div>
  );
}
