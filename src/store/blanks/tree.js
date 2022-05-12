import { TREE_DIR, TREE_FILE } from "@/consts";

export default [
  {
    id: "4ae32038-d1cd-11ec-9d64-0242ac120002",
    name: "Dir 1",
    parent: null,
    type: TREE_DIR,
  },
  {
    id: "4ae322a4-d1cd-11ec-9d64-0242ac120002",
    name: "Dir 1-1",
    parent: "4ae32038-d1cd-11ec-9d64-0242ac120002",
    type: TREE_DIR,
  },
  {
    id: "5c0fd4f0-d1cd-11ec-9d64-0242ac120002",
    name: "File 1-1-1",
    parent: "4ae322a4-d1cd-11ec-9d64-0242ac120002",
    type: TREE_FILE,
  },
  {
    id: "5c0fd78e-d1cd-11ec-9d64-0242ac120002",
    name: "File 1-2",
    parent: "4ae32038-d1cd-11ec-9d64-0242ac120002",
    type: TREE_FILE,
  },
  {
    id: "5c0fd89c-d1cd-11ec-9d64-0242ac120002",
    name: "Dir 2",
    parent: null,
    type: TREE_DIR,
  },
  {
    id: "5c0fdb80-d1cd-11ec-9d64-0242ac120002",
    name: "Dir 2-1",
    parent: "5c0fd89c-d1cd-11ec-9d64-0242ac120002",
    type: TREE_DIR,
  },
  {
    id: "5c0fdc8e-d1cd-11ec-9d64-0242ac120002",
    name: "File 2-2",
    parent: "5c0fd89c-d1cd-11ec-9d64-0242ac120002",
    type: TREE_FILE,
  },
  {
    id: "5c0fdd9c-d1cd-11ec-9d64-0242ac120002",
    name: "File 2",
    parent: null,
    type: TREE_FILE,
  },
];
