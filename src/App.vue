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
    ricercaTitolo() {
      if (store.valoreRicerca === "") return;

      store.titoloRicercato = true;

      // API serie tv
      let CopySeriesAPI = store.seriesAPI
      CopySeriesAPI = `${CopySeriesAPI}&query=${store.valoreRicerca}`


      axios
        .get(CopySeriesAPI)
        .then(res => {
          store.serieTrovate = res.data.results
          console.log(store.serieTrovate);
        })
        .catch(err => {
          console.log("Errore", err);
        });

      // API Film
      let CopyFilmAPI = store.filmAPI
      CopyFilmAPI = `${CopyFilmAPI}&query=${store.valoreRicerca}`


      axios
        .get(CopyFilmAPI)
        .then(res => {
          store.filmTrovati = res.data.results
          console.log(store.filmTrovati);
        })
        .catch(err => {
          console.log("Errore", err);
        });


      store.valoreRicerca = ""
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
  <AppHeader @clickedSearch="ricercaTitolo" />
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
