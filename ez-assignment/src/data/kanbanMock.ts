import type { Column } from "../components/Kanban/kanban.types";

export const initialBoard: Column[] = [
  {
    id: "todo",
    title: "Todo",
    cards: [
      { id: "t1", title: "Create project plan" },
      { id: "t2", title: "Design UI layout" }
    ]
  },
  {
    id: "progress",
    title: "In Progress",
    cards: [
      { id: "p1", title: "Build Kanban component" }
    ]
  },
  {
    id: "done",
    title: "Done",
    cards: [
      { id: "d1", title: "Setup repository" }
    ]
  }
];
