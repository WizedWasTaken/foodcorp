<template>
  <nav>
    <h1>NAV</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/stores">Restauranter</router-link>
    <router-link to="/menu">Menu Kort</router-link>
    <router-link to="/about">Om Os</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
nav {
  background-color: #f2f2f2;
  padding: 10px;
}
</style>
