<template>
  <div id="papaErAdem">
    <SideBar />
    <div id="notSidebar">
      <NavBar />
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

#papaErAdem {
  display: flex;
}

#notSidebar {
  width: calc(100vw - 250px);
  flex-direction: column;
}
</style>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  components: {
    NavBar,
    FooterBar,
    SideBar,
  },
};
</script>
