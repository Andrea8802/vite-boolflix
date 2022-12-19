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

  methods: {
    getAPI() {

      if (store.valoreRicerca === "") return;

      store.ricercaFatta = true;

      // API serie e film
      let CopyFilmSeriesAPI = store.filmSeriesAPI
      CopyFilmSeriesAPI = `${CopyFilmSeriesAPI}&query=${store.valoreRicerca}`


      axios
        .get(CopyFilmSeriesAPI)
        .then(res => {
          store.filmSeriesTrovati = res.data.results
          console.log(store.filmSeriesTrovati);
        })
        .catch(err => {
          console.log("Errore", err);
        });

    }
  },
  mounted() {
    // API film più popolari
    axios
      .get(store.filmPopolariAPI)
      .then(res => {
        store.filmTrovati = res.data.results
      })
      .catch(err => {
        console.log("Errore", err);
      })


    // API serie più popolari
    axios
      .get(store.seriePopolariAPI)
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
  <AppHeader @clickedSearch="getAPI" />
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
