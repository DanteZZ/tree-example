<template>
  <img class="tree-icon" :src="icons[name]" alt="" />
</template>

<script>
import remove from "@/assets/icons/remove.svg";
import file from "@/assets/icons/file.svg";
import dir from "@/assets/icons/dir.svg";
import rename from "@/assets/icons/rename.svg";

export default {
  name: "FilesTreeItemIcon",
  props: {
    name: String,
  },
  data: () => ({
    icons: {
      remove,
      file,
      dir,
      rename,
    },
  }),
};
</script>

<style scoped>
.tree-icon {
  transition: 0.2s;
  opacity: 1;
  cursor: pointer;
}
.tree-icon:hover {
  opacity: 0.5;
}
</style>
