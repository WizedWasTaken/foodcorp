<template>
  <nav>
    <router-link to="/">
      <img src="@/assets/logo.png" alt="FoodCorp.dk Logo" />
    </router-link>
    <div class="hoverEffectNav">
      <router-link to="/">Home</router-link>
      <router-link to="/stores">Restauranter</router-link>
      <router-link to="/menu">Menu Kort</router-link>
      <router-link to="/about">Om Os</router-link>
    </div>
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

  img {
    width: 80%;
    aspect-ratio: 2 / 1;
    margin-bottom: 5%;
  }

  a {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hoverEffectNav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    &:hover a {
      color: rgb(97, 97, 97);
    }

    a {
      padding: 1rem 0px;
      margin-bottom: 5px;
      width: 80%;
      text-decoration: none;
      color: black;
      transition: color 500ms;
      justify-content: flex-start;

      &:hover {
        color: black;
      }
    }
  }
}
</style>
