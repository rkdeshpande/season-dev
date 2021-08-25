<template>
  <div id="app">
    <TitleCard v-bind="this.getSeasonIcon()" />
    <Season :season="this.getSeason()" />
  </div>
</template>

<script>
import TitleCard from './components/TitleCard.vue'
import Season from './components/Season.vue'
import $ from 'jquery'

function getWeather(q, callback) {
  const url = 'http://api.openweathermap.org/data/2.5/weather';
  const appid = 'a973c7588f25f457987274e21d050af1'
  $.ajax({
    dataType: "jsonp",
    url: url,
    jsonCallback: 'jsonp',
    data: { q, appid },
    cache: false,
    success: function (data) {
      let {temp} = data.main;
      temp = (((temp - 273.15) * 9) / 5) + 32
      callback(temp);
    }
  });
}

function getSeasonIcon() {
  // Calculate which season icon to highlight
  const today = new Date(Date.now())

  const year = today.getFullYear()
  const spring = new Date(`March 20, ${year}`)
  const summer = new Date(`June 21, ${year}`)
  const autumn = new Date(`September 22, ${year}`)
  const winter = new Date(`December 21, ${year}`)

  return {
    isSpring: today >= spring && today < summer,
    isSummer: today >= summer && today < autumn,
    isAutumn: today >= autumn && today < winter,
    isWinter: today < spring || today >= winter
  }
}

function calcSeason(temp) {
  const seasons = this.getSeasonIcon();

  if (seasons["isSpring"] && temp < 45) {
    this.season = 5;
  } else if(seasons["isSummer"] && temp > 85) {
    this.season = 9;
  } else if (seasons["isAutumn"] && temp > 65) {
    this.season = 11;
  }
}

function getSeason() {
  this.getWeather("Boston", this.calcSeason)
  return this.season
}

export default {
  name: 'App',
  components: {
    TitleCard,
    Season
  },
  methods: {
    getSeasonIcon,
    getSeason,
    calcSeason,
    getWeather
  },
  data: () => {
    return {
      season: 8
    }
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
