<template>
  <div id="app">
    <TitleCard />
    <Season msg="First Winter" />
  </div>
</template>

<script>
import TitleCard from './components/TitleCard.vue'
import Season from './components/Season.vue'

export default {
  name: 'App',
  components: {
    TitleCard,
    Season
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
