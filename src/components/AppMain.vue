<script>
import { store } from '../store'
import FilmCard from './FilmCard.vue';
import SeriesCard from './SeriesCard.vue';

export default {
    name: "AppMain",
    components: {
        FilmCard,
        SeriesCard
    },

    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <main>
        <h1 v-if="store.bottoneCliccato">
            FILM
        </h1>

        <div class="list">
            <FilmCard />
        </div>

        <hr v-if="store.bottoneCliccato">

        <h1 v-if="store.bottoneCliccato">
            SERIE TV
        </h1>

        <div class="list">
            <SeriesCard />
        </div>
    </main>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;

main {
    min-height: calc(100vh - 100px);
    background-color: #181818;
    color: white;

    h1 {
        text-align: center;
        padding: 50px 0;
    }

    .list {
        padding: 20px 50px;
        @include d-flex(evenly, center);
        column-gap: 50px;
        row-gap: 100px;
    }

    hr {
        border-color: gray;
        margin-top: 50px;
    }
}
</style>