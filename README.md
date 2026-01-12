# Front-End Developer Assignment

This project contains solutions for the following components built using
**React + TypeScript**:

1. Tree View Component
2. Kanban Board Component

The focus of this assignment is on **approach, structure, and understanding**
rather than full feature completeness.

---

## Tree View Component

### Features Implemented
- Recursive tree rendering
- Expand / collapse parent nodes
- Lazy loading of child nodes (simulated async)
- Inline editing of node names
- Add child nodes using input prompt
- Delete node with confirmation

### Technical Notes
- Tree structure is maintained using a clear data model
- Lazy loading is simulated using `setTimeout` to mimic API behavior
- State is kept local to maintain simplicity and clarity

### Known Limitations
- Drag & drop is not implemented intentionally to focus on
  recursion, async handling, and state clarity.

---

## Kanban Board Component

### Features Implemented
- Three default columns: Todo, In Progress, Done
- Add and delete cards in any column
- Inline editing of card titles
- Responsive layout (columns stack on small screens)
- Clean component hierarchy: Board → Column → Card

### Technical Notes
- State is lifted to the board level for predictable updates
- No external state management library used

### Known Limitations
- Drag & drop between columns is not implemented
- Data is stored only in local state

---

## Tech Stack
- React 18
- TypeScript
- Vite
- Minimal CSS

---

## Getting Started

```bash
npm install
npm run dev
