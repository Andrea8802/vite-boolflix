<script>
import { store } from '../store'
import SelectHeader from './SelectHeader.vue';
import axios from 'axios';

export default {
  name: "AppHeader",
  components: {
    SelectHeader
  },

  data() {
    return {
      store

    }
  },

  methods: {
    ricercaTitolo() {
      if (store.valoreRicerca === "") return;

      store.ricercaEffettuata = true;

      // API ricerca serie tv
      axios
        .get(store.seriesAPI + store.valoreRicerca + "&language=" + store.linguaScelta)
        .then(res => {
          store.serieTrovate = res.data.results
        })
        .catch(err => {
          console.log("Errore", err);
        });


      // API ricerca Film
      axios
        .get(store.filmAPI + store.valoreRicerca + "&language=" + store.linguaScelta)
        .then(res => {
          store.filmTrovati = res.data.results
        })
        .catch(err => {
          console.log("Errore", err);
        });

      store.valoreRicerca = ""
    }
  }
}
</script>

<template>

  <header>
    <h1>
      BOOLFLIX
    </h1>

    <div class="search">
      <SelectHeader />

      <input type="search" v-model="store.valoreRicerca" @keyup.enter="ricercaTitolo">

      <button @click="ricercaTitolo">
        Cerca
      </button>
    </div>
  </header>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;

header {
  background-color: black;
  width: 100%;
  height: 100px;
  padding: 0 30px;
  @include d-flex(between, center);
  border-bottom: 4px solid rgba($color: gray, $alpha: 0.3);

  h1 {
    color: red;
  }

  .search {
    @include d-flex (evenly, center);
    gap: 20px;


    input {
      border: 1px solid white;
      border-radius: 5px;
      background-color: black;
      padding: 10px 15px;
      font-weight: bold;
      color: white;

      &:focus {
        outline: none;
        border: 2px solid white;
        background-color: #181818;
      }

      &:hover {
        background-color: #181818;
      }
    }

    button {
      border: 1px solid white;
      border-radius: 10px;
      color: red;
      font-weight: bold;
      background-color: black;
      padding: 10px 15px;
      font-size: 14px;
      cursor: pointer;

      &:focus {
        border: 2px solid white
      }

      &:hover {
        background-color: #181818;
      }

    }
  }

}
</style>
