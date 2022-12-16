<script>
import AppHeader from './components/AppHeader.vue'
import FilmList from './components/FilmList.vue'
import axios from 'axios';
import { store } from './store'

export default {
  name: "App",
  components: {
    AppHeader,
    FilmList
  },

  data() {
    return {
      store
    }
  },

  methods: {
    getAPI() {
      store.apiURL = `${store.apiURL}&query=${store.valoreRicerca}`
      axios
        .get(store.apiURL)
        .then(res => {
          store.filmTrovati = res.data.results
          console.log(store.filmTrovati);
        })
        .catch(err => {
          console.log("Errore", err);
        })
    }
  }
}
</script>

<template>
  <AppHeader @clickedSearch="getAPI" />
  <main>
    <FilmList />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
