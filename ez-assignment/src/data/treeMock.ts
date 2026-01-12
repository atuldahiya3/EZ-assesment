import type { TreeNodeData } from "../components/TreeView/tree.types";

export const initialTree: TreeNodeData[] = [
  {
    id: "1",
    name: "Root Folder",
    hasChildren: true
  },
  {
    id: "2",
    name: "Documents",
    hasChildren: true
  }
];

export const fetchChildren = (parentId: string): Promise<TreeNodeData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: `${parentId}-1`, name: "Child 1" },
        { id: `${parentId}-2`, name: "Child 2", hasChildren: true }
      ]);
    }, 600);
  });
};
