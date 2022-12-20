<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import Loading from './components/Loading.vue'

import axios from 'axios';
import { store } from './store'

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    Loading
  },

  data() {
    return {
      store
    }
  },

  created() {

    // API film più popolari
    let copyFilmAPI = store.ordineFilmAPI
    copyFilmAPI += "popularity.desc"
    console.log(copyFilmAPI);

    axios
      .get(copyFilmAPI)
      .then(res => {
        store.filmTrovati = res.data.results
        console.log(store.filmTrovati);
      })
      .catch(err => {
        console.log("Errore", err);
      })
      .finally(() => {
        store.APILoaded++;
      })


    // API serie più popolari
    let copySeriesAPI = store.ordineSerieAPI
    copySeriesAPI += "popularity.desc"
    console.log(copySeriesAPI);

    axios
      .get(copySeriesAPI)
      .then(res => {
        store.serieTrovate = res.data.results
        console.log(store.serieTrovate);

      })
      .catch(err => {
        console.log("Errore", err);
      })
      .finally(() => {
        store.APILoaded++;
      })


    axios
      .get(store.filmGenAPI)
      .then(res => {
        store.generiFilm = res.data.genres
        console.log("aa", store.generiFilm);
      })
      .catch(err => {
        console.log("Errore", err);
      })
      .finally(() => {
        store.APILoaded++;
      })

    axios
      .get(store.seriesGenAPI)
      .then(res => {
        store.generiSeries = res.data.genres
        console.log(store.generiSeries);
      })
      .catch(err => {
        console.log("Errore", err);
      })
      .finally(() => {
        store.APILoaded++;
      })
  }
}
</script>

<template>
  <div v-if="store.APILoaded === 4">
    <AppHeader />
    <AppMain />
  </div>

  <div v-else="">
    <loading />
  </div>

</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
