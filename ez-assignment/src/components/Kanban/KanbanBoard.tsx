import { useState } from "react";
import type { Column } from "./kanban.types";
import ColumnView from "./Column";
import { initialBoard } from "../../data/kanbanMock";

export default function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>(initialBoard);

  return (
    <div className="board">
      {columns.map((col) => (
        <ColumnView
          key={col.id}
          column={col}
          onUpdate={(updated) =>
            setColumns((prev) =>
              prev.map((c) => (c.id === updated.id ? updated : c))
            )
          }
        />
      ))}
    </div>
);
}
