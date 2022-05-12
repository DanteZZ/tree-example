import tree from "../blanks/tree";
import { remover } from "../helpers/remover";

export default {
  state: () => ({
    tree,
    editing: null,
  }),
  actions: {
    renameTreeItem: ({ commit, state }, { id, name }) => {
      commit(
        "updateTree",
        state.tree.map((i) => (i.id === id ? { ...i, name } : i))
      );
    },
    removeTreeItem: ({ commit, state, getters }, id) => {
      commit(
        "updateTree",
        state.tree.filter((i) => remover(getters.tree, id).indexOf(i.id) < 0)
      );
    },
    toggleEditing: ({ commit, state }, id) => {
      commit("updateEditing", state.editing === id ? null : id);
    },
  },
  mutations: {
    updateTree: (state, items) => {
      state.tree = items;
    },
    updateEditing: (state, editing) => {
      state.editing = editing;
    },
  },
  getters: {
    tree: (state) => {
      // Формирование и возврат дерева файлов/директории
      const treeList = [];
      const lookup = {};
      state.tree.forEach(function (obj) {
        lookup[obj.id] = obj;
        obj.childrens = [];
      });
      state.tree.forEach(function (obj) {
        if (obj.parent != null) {
          if (lookup[obj.parent] !== undefined) {
            lookup[obj.parent].childrens.push(obj);
          } else {
            treeList.push(obj);
          }
        } else {
          treeList.push(obj);
        }
      });
      return treeList;
    },
    editing: (state) => state.editing,
  },
};
