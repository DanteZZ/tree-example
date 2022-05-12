<template>
  <Tree />
</template>

<script>
import Tree from "./components/Tree.vue";

export default {
  name: "App",
  components: {
    Tree,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
div,
form {
  box-sizing: border-box;
}
</style>
