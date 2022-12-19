<script>
import { store } from '../store'
import SeriesFilmCard from './SeriesFilmCard.vue';
import SeriesCard from './SeriesCard.vue';
import FilmCard from './FilmCard.vue';

export default {
    name: "AppMain",
    components: {
        SeriesFilmCard,
        SeriesCard,
        FilmCard

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
        <div v-if="!store.ricercaFatta">
            <h1>
                Serie TV Più Popolari
            </h1>
            <div class="list">
                <SeriesCard />
            </div>

            <hr>

            <h1>
                Film Più Popolari
            </h1>

            <div class="list">
                <FilmCard />
            </div>
        </div>


        <div class="list" v-else="">
            <SeriesFilmCard />
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