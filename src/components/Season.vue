<template>
  <div class="hello">
    <h1 v-bind:class="{active: status === 1, inactive: status !== 1}">Winter</h1>
    <h1 v-bind:class="{active: status === 2, inactive: status !== 2}">Fool's Spring</h1>
    <h1 v-bind:class="{active: status === 3, inactive: status !== 3}">Second Winter</h1>
    <h1 v-bind:class="{active: status === 4, inactive: status !== 4}">Spring of Deception</h1>
    <h1 v-bind:class="{active: status === 5, inactive: status !== 5}">Third Winter</h1>
    <h1 v-bind:class="{active: status === 6, inactive: status !== 6}">The Pollening</h1>
    <h1 v-bind:class="{active: status === 7, inactive: status !== 7}">Actual Spring</h1>
    <h1 v-bind:class="{active: status === 8, inactive: status !== 8}">Summer</h1>
    <h1 v-bind:class="{active: status === 9, inactive: status !== 9}">Hell's Front Porch</h1>
    <h1 v-bind:class="{active: status === 10, inactive: status !== 10}">False Fall</h1>
    <h1 v-bind:class="{active: status === 11, inactive: status !== 11}">Second Summer</h1>
    <h1 v-bind:class="{active: status === 12, inactive: status !== 12}">Actual Fall</h1>
  </div>
</template>

<script>
export default {
  name: 'Season',
  data: () => {
    return {
      status: 8
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab');
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.inactive {
  color: #808b96;
  font-size: 1.25em;
  font-family: 'Roboto Slab', serif;
}
.active {
  font-size: 2.5em;
  color: #2c3e50;
  font-family: 'Signika', sans-serif;
  text-transform: uppercase;
}
</style>
