<template>
  <div class="tree-item">
    <div class="tree-info">
      <TreeItemIcon :name="item.type" />
      <form
        v-if="editing == item.id"
        @submit.prevent="updateName()"
        class="tree-editor"
      >
        <input v-model="editingName" class="editor-input" />
        <button class="editor-button">Ок</button>
      </form>

      <div v-else class="tree-name">{{ item.name }}</div>
      <div class="tree-actions">
        <TreeItemIcon @click="openEditor()" name="rename" />
        <TreeItemIcon @click="removeTreeItem(item.id)" name="remove" />
      </div>
    </div>
    <TreeItem v-for="i in item.childrens" :key="i.id" :item="i" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TreeItem from "./TreeItem";
import TreeItemIcon from "./TreeItemIcon";

export default {
  name: "FilesTreeItem",
  props: {
    item: Object,
  },
  data: () => ({
    editingName: "",
  }),
  methods: {
    ...mapActions(["renameTreeItem", "removeTreeItem", "toggleEditing"]),
    openEditor() {
      this.toggleEditing(this.item.id);
      this.editingName = this.item.name;
    },
    updateName() {
      this.renameTreeItem({ id: this.item.id, name: this.editingName });
      this.toggleEditing();
    },
  },
  computed: {
    ...mapGetters(["editing"]),
  },
  components: {
    TreeItem,
    TreeItemIcon,
  },
};
</script>

<style scoped>
.tree-item {
  width: 100%;
  padding-left: 16px;
}
.tree-info {
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 4px 0px;
}
.tree-name {
  flex-grow: 1;
  padding: 0px 16px;
}

.tree-editor {
  display: flex;
  flex-grow: 1;
  padding-left: 8px;
}
.editor-input {
  flex-grow: 1;
}
.editor-button {
  margin: 0px 8px;
  cursor: pointer;
}
</style>
