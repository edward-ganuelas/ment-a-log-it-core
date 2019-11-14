<template>
  <div id="app">
    <div id="nav" class="container">
      <router-link to="/" class="col">Home</router-link>
      <router-link to="/about" class="col">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import darkMode from './darkmode';

export default {
    mounted() {
        darkMode.showWidget();
    }
}

</script>
<style lang="scss">
@import "./node_modules/bootstrap/scss/bootstrap-reboot.scss";
@import "./node_modules/bootstrap/scss/bootstrap-grid.scss";
@import "./node_modules/bootstrap/scss/_buttons.scss";
@import url('https://fonts.googleapis.com/css?family=Nunito');
#app {
  font-family: 'Nunito', sans-serif;
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
textarea{
  border-color: #000;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 18px;
}
.show-text{
  padding-bottom: 18px;
}
.darkmode--activated  {
  p, h3, .vs__actions {
    color: #FFF;
  }
  #nav {
    a {
      color: #FFF;
      &.router-link-exact-active {
        color: #0066ff;
      }
    }
  }
  textarea, .vs__dropdown-toggle, .vs__dropdown-menu, .vs__dropdown-option {
      background-color: #484848;
      color: #FFF;
  }
  
  .vs__actions svg {
    fill: #FFF;
  }
  
}
</style>
