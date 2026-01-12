import TreeView from "./components/TreeView/TreeView";
import KanbanBoard from "./components/Kanban/KanbanBoard";
import { initialTree } from "./data/treeMock";

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: "Arial, sans-serif" }}>
      <h2>Tree View</h2>
      <TreeView data={initialTree} />

      <hr style={{ margin: "32px 0" }} />

      <h2>Kanban Board</h2>
      <KanbanBoard />
    </div>
  );
}
