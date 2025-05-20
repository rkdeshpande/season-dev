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
import { getSeasonIcon, calculateSeason } from './utils/seasonCalculator'

function getWeather(q, callback) {
  const url = 'https://api.openweathermap.org/data/2.5/weather';
  const appid = "a973c7588f25f457987274e21d050af1"
  $.ajax({
    dataType: "jsonp",
    url: url,
    jsonCallback: 'jsonp',
    data: { q, appid },
    cache: false,
    success: function (data) {
      let {temp_max} = data.main;
      temp_max = (((temp_max - 273.15) * 9) / 5) + 32
      callback(temp_max);
    }
  });
}

function calcSeason(temp) {
  this.season = calculateSeason(temp)
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
