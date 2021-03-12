<template>
  <div class="hello">
    <font-awesome-icon class="season-icon" v-bind:class="{ spring: isSpring}" :icon="['fas', 'cloud-showers-heavy']" />
    <font-awesome-icon class="season-icon" v-bind:class="{ summer: isSummer}" :icon="['fas', 'sun']" />
    <font-awesome-icon class="season-icon" v-bind:class="{ autumn: isAutumn}" :icon="['fas', 'wind']" />
    <font-awesome-icon class="season-icon" v-bind:class="{ winter: isWinter}" :icon="['fas', 'snowflake']" />
    <h1>What Boston Season Is It?</h1>
  </div>
</template>

<script>
function data() {
  let today = new Date(Date.now())

  let year = today.getFullYear()
  let spring = new Date(`March 20, ${year}`)
  let summer = new Date(`June 21, ${year}`)
  let autumn = new Date(`September 22, ${year}`)
  let winter = new Date(`December 21, ${year}`)

  return {
    isSpring: today >= spring && today < summer,
    isSummer: today >= summer && today < autumn,
    isAutumn: today >= autumn && today < winter,
    isWinter: today < spring || today >= winter
  }
}

export default {
  name: 'TitleCard',
  data: data
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  color: #2c3e50;
}
h1 {
  margin-top: 15px;
  font-size: 4em;
  font-family: 'Cormorant', serif;
}
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
.season-icon {
  font-size: 3.5em;
  margin-left: 40px;
}
.season-icon:first-child {
  margin-left: 0;
}
.spring {
  color: #2fc259
}
.summer {
  color: #EA5B32
}
.autumn {
  color: #ead032
}
.winter {
  color: #81e2f1
}
</style>
