<script>
import AppHeader from './components/AppHeader.vue'
import FilmList from './components/FilmList.vue'
import TVSeries from './components/TVSeries.vue'
import axios from 'axios';
import { store } from './store'

export default {
  name: "App",
  components: {
    AppHeader,
    FilmList,
    TVSeries
  },

  data() {
    return {
      store
    }
  },

  methods: {
    getAPI() {

      // Chiamata API Film

      let CopyAPIFilm = store.filmAPIURL
      CopyAPIFilm = `${CopyAPIFilm}&query=${store.valoreRicerca}`
      axios

        .get(CopyAPIFilm)
        .then(res => {
          store.filmTrovati = res.data.results
          console.log(store.filmTrovati);
        })
        .catch(err => {
          console.log("Errore", err);
        })

      // Chiamata API Serie TV
      let CopyAPISeries = store.seriesAPIURL
      CopyAPISeries = `${CopyAPISeries}&query=${store.valoreRicerca}`
      console.log(CopyAPISeries);

      axios
        .get(CopyAPISeries)
        .then(res => {
          store.serieTrovate = res.data.results
          console.log(store.serieTrovate);
        })
        .catch(err => {
          console.log("Errore:", err);
        })
    }
  }
}
</script>

<template>
  <AppHeader @clickedSearch="getAPI" />
  <main>
    <FilmList />
    <TVSeries />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
