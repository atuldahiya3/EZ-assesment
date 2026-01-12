import type { Column } from "./kanban.types";
import CardView from "./Card";

interface Props {
  column: Column;
  onUpdate: (column: Column) => void;
}

export default function ColumnView({ column, onUpdate }: Props) {
  const addCard = () => {
    const title = prompt("Card title");
    if (!title) return;

    onUpdate({
      ...column,
      cards: [
        ...column.cards,
        { id: crypto.randomUUID(), title }
      ]
    });
  };

  const removeCard = (id: string) => {
    onUpdate({
      ...column,
      cards: column.cards.filter((c) => c.id !== id)
    });
  };

  const updateCard = (id: string, title: string) => {
    onUpdate({
      ...column,
      cards: column.cards.map((c) =>
        c.id === id ? { ...c, title } : c
      )
    });
  };

  return (
    <div className="column">
      <h3>{column.title}</h3>

      {column.cards.map((card) => (
        <CardView
          key={card.id}
          card={card}
          onDelete={() => removeCard(card.id)}
          onEdit={(title) => updateCard(card.id, title)}
        />
      ))}

      <button className="add-btn" onClick={addCard}>
        + Add Card
      </button>
    </div>
  );
}
