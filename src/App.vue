<template>
  <div id="app">
    <div id="nav" class="container">
      <router-link to="/" class="col">Home</router-link>
      <router-link to="/about" class="col">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./node_modules/bootstrap/scss/bootstrap-reboot.scss";
@import "./node_modules/bootstrap/scss/bootstrap-grid.scss";
@import "./node_modules/bootstrap/scss/_buttons.scss";
@import url('https://fonts.googleapis.com/css?family=Catamaran');
#app {
  font-family: 'Catamaran', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 1rem;
}
#nav {
  text-align: left;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-align: center;
    &.router-link-exact-active {
      color: #0066ff;
    }
  }
}
</style>
