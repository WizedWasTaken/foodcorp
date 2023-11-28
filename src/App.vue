<template>
  <div id="papaErAdem">
    <SideBar />
    <div id="notSidebar">
      <router-view />
      <FooterBar />
    </div>
  </div>
</template>

<!-- GLOBAL SCSS -->
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#papaErAdem {
  display: flex;
}

.router-link-active,
.router-link-exact-active {
  color: lightgreen !important;
}

#notSidebar {
  width: calc(100vw - 250px);
  flex-direction: column;
}
</style>

<script>
import FooterBar from "@/components/FooterBar.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  components: {
    FooterBar,
    SideBar,
  },
};
</script>
