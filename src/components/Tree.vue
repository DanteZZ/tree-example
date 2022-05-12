<template>
  <div class="tree">
    <TreeItem v-for="item in tree" :key="item.id" :item="item" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TreeItem from "./TreeItem";

export default {
  name: "FilesTree",
  computed: {
    ...mapGetters(["tree"]),
  },
  components: {
    TreeItem,
  },
};
</script>

<style scoped>
.tree {
  width: 500px;
  border: 1px solid #ccc;
  padding: 8px 12px 12px 0px;
  border-radius: 6px;
}
</style>
