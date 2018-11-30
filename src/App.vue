<template>
  <div id="app">
    <nav class="navbar" role="navigation">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">
            <img src="./assets/img/logo.png" width="28">
          </router-link>
          <a role="button" aria-label="menu" aria-expanded="false"
            data-target="navigation-menu" class="navbar-burger burger"
            v-on:click="toggleButton" id="burger">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu" id="navigation-menu">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/admin">Admin</router-link>
          <router-link class="navbar-item" to="/cart">Cart</router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    toggleButton() {
      const burgerIcon = document.getElementById('burger')
      const toggledMenu = document.getElementById('navigation-menu')
      burgerIcon.classList.toggle('is-active')
      toggledMenu.classList.toggle('is-active')
    },
  },
}
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
