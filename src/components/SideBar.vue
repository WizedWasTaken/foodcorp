<template>
  <div class="sidebar">
    <NavBar />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #f5f5f5;
  box-sizing: border-box;
  left: 0;
  border-right: 2px solid black;
}
</style>
