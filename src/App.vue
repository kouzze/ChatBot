<template>
  <img alt="Vue logo" src="./assets/logoA.png">
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <BotonInteractivo />
</template>

<script>
import BotonInteractivo from './components/BotonInteractivo.vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    BotonInteractivo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
