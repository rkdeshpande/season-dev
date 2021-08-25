<template>
  <div class="hello">
    <h1 v-bind:class="{active: season === 1, inactive: season !== 1}">Winter</h1>
    <h1 v-bind:class="{active: season === 2, inactive: season !== 2}">Fool's Spring</h1>
    <h1 v-bind:class="{active: season === 3, inactive: season !== 3}">Second Winter</h1>
    <h1 v-bind:class="{active: season === 4, inactive: season !== 4}">Spring of Deception</h1>
    <h1 v-bind:class="{active: season === 5, inactive: season !== 5}">Third Winter</h1>
    <h1 v-bind:class="{active: season === 6, inactive: season !== 6}">The Pollening</h1>
    <h1 v-bind:class="{active: season === 7, inactive: season !== 7}">Actual Spring</h1>
    <h1 v-bind:class="{active: season === 8, inactive: season !== 8}">Summer</h1>
    <h1 v-bind:class="{active: season === 9, inactive: season !== 9}">Hell's Front Porch</h1>
    <h1 v-bind:class="{active: season === 10, inactive: season !== 10}">False Fall</h1>
    <h1 v-bind:class="{active: season === 11, inactive: season !== 11}">Second Summer</h1>
    <h1 v-bind:class="{active: season === 12, inactive: season !== 12}">Actual Fall</h1>
  </div>
</template>

<script>
export default {
  name: 'Season',
  props: ['season']
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
