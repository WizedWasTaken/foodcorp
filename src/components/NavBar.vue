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

<style lang="scss" scoped>
nav {
  background-color: #f2f2f2;
  padding: 10px;

  /* FLEX BOX */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    padding: 0.5rem 1rem;
  }
}
</style>
