<template>
  <NavBar />
  <router-view />
  <FooterBar />
</template>

<!-- GLOBAL SCSS -->
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}
</style>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  components: {
    NavBar,
    FooterBar,
  },
};
</script>
