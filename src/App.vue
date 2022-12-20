<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

import axios from 'axios';
import { store } from './store'

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain
  },

  data() {
    return {
      store
    }
  },

  mounted() {

    // API film più popolari
    let copyFilmAPI = store.ordineSerieAPI
    copyFilmAPI += "popularity.desc"
    console.log(copyFilmAPI);

    axios
      .get(copyFilmAPI)
      .then(res => {
        store.filmTrovati = res.data.results
      })
      .catch(err => {
        console.log("Errore", err);
      })


    // API serie più popolari
    let copySeriesAPI = store.ordineSerieAPI
    copySeriesAPI += "popularity.desc"
    console.log(copySeriesAPI);

    axios
      .get(copySeriesAPI)
      .then(res => {
        store.serieTrovate = res.data.results
      })
      .catch(err => {
        console.log("Errore", err);
      })
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
