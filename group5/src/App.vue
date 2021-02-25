<template>
  <div id="app">
    <img src="./assets/lobby.jpg" alt="Trulli" width="1000" height="333">
    <router-view/>
  </div>
</template>

<script>
import nav from "./components/nav.vue";
export default {
  name: 'App',
  components: {
    nav
  }
  }

</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
