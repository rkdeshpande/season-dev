<template>
  <div id="app">
    <font-awesome-icon class="season-icon" :icon="['fas', 'cloud-showers-heavy']" />
    <font-awesome-icon class="season-icon" :icon="['fas', 'sun']" />
    <font-awesome-icon class="season-icon" :icon="['fas', 'wind']" />
    <font-awesome-icon class="season-icon" :icon="['fas', 'snowflake']" />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/TitleCard.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
.season-icon {
  font-size: 5em;
  margin-left: 40px;
}
.season-icon:first-child {
  margin-left: 0;
}
</style>
