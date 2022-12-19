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
        <div v-if="store.filtroRicerca === 'SerieTV'">
            <h1>
                Serie TV
                <span v-if="!store.titoloRicercato">
                    Più Popolari
                </span>
            </h1>
            <SeriesCard />
        </div>

        <div v-if="store.filtroRicerca === 'Film'">
            <h1>
                Film
                <span v-if="!store.titoloRicercato">
                    Più Popolari
                </span>
            </h1>

            <FilmCard />
        </div>


        <div v-if="store.filtroRicerca !== 'Film' && store.filtroRicerca !== 'SerieTV'">
            <h1>
                Serie TV
                <span v-if="!store.titoloRicercato">
                    Più Popolari
                </span>
            </h1>

            <SeriesCard />

            <hr>

            <h1>
                Film
                <span v-if="!store.titoloRicercato">
                    Più Popolari
                </span>
            </h1>

            <FilmCard />
        </div>

    </main>

</template>

<style lang="scss" scoped>
main {
    min-height: calc(100vh - 100px);
    background-color: #181818;
    color: white;

    h1 {
        text-align: center;
        padding: 50px 0;
    }


    hr {
        border-color: gray;
        margin-top: 50px;
    }
}
</style>