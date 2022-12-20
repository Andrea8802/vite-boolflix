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
      store,
      APILoaded: 0
    }
  },

  created() {

    // API film più popolari
    axios
      .get(store.ordineFilmAPI + "popularity.desc")
      .then(res => {
        store.filmTrovati = res.data.results
      })
      .catch(err => {
        console.log("Errore", err);
      })
      .finally(() => {
        this.APILoaded++;
      })


    // API serie più popolari
    axios
      .get(store.ordineSerieAPI + "popularity.desc")
      .then(res => {
        store.serieTrovate = res.data.results
      })
      .catch(err => {
        console.log("Errore", err);
      })
      .finally(() => {
        this.APILoaded++;
      })

    // API per i generi dei film
    axios
      .get(store.filmGenAPI)
      .then(res => {
        store.generiFilm = res.data.genres
      })
      .catch(err => {
        console.log("Errore", err);
      })
      .finally(() => {
        this.APILoaded++;
      })

    // API per i generi delle series
    axios
      .get(store.seriesGenAPI)
      .then(res => {
        store.generiSeries = res.data.genres
      })
      .catch(err => {
        console.log("Errore", err);
      })
      .finally(() => {
        this.APILoaded++;
      })
  }
}
</script>

<template>

  <!-- Attendere tutte le API con loading page -->
  <div v-if="APILoaded === 4">
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
