<script>
import { store } from '../store'
export default {
  name: "AppHeader",
  data() {
    return {
      store,

    }
  }
}
</script>

<template>

  <header>
    <h1>
      BoolFlix
    </h1>

    <div class="search">
      <label for="filtra">
        Mostra:
      </label>

      <select id="filtra" v-model="store.filtroRicerca">
        <option value="">
          Tutto
        </option>

        <option value="SerieTV">
          Serie TV
        </option>

        <option value="Film">
          Film
        </option>

      </select>

      <input type="search" v-model="store.valoreRicerca" @keyup.enter="$emit('clickedSearch')">

      <button @click="$emit('clickedSearch')">
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
    @include d-flex (center, center);
    gap: 15px;

    label {
      color: white;
      font-weight: bold;
    }

    select {
      background-color: black;
      color: white;
      border: 1px solid white;
      border-radius: 5px;
      padding: 5px 10px;

      &:focus {
        outline: none;
        border: 2px solid white;
        background-color: #181818;
      }

      &:hover {
        background-color: #181818;
      }
    }

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
