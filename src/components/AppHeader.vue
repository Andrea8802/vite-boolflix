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
      <input type="search" v-model="store.valoreRicerca" @keyup.enter="$emit('clickedSearch')">
      <button @click="$emit('clickedSearch')">
        Cerca
      </button>
    </div>
  </header>

</template>

<style lang="scss" scoped>
header {
  background-color: black;
  width: 100%;
  height: 100px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: red;
  }

  button {
    margin-left: 20px;
  }
}
</style>
