<script>
import { store } from '../store'
import SeriesCard from './SeriesCard.vue';
import FilmCard from './FilmCard.vue';

export default {
    name: "AppMain",
    components: {
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

        <!-- Operatore ternario per impostare il DOM in base ai dati ricevuti -->
        <div v-if="store.filmTrovati.length === 0 && store.serieTrovate.length === 0" class="ricerca-nulla">
            La ricerca non ha ottenuto nessun risultato
        </div>

        <div v-if="store.serieTrovate.length > 0">
            <h1>
                Serie TV
            </h1>
            <SeriesCard />
        </div>

        <div v-if="store.filmTrovati.length > 0">
            <h1>
                Film
            </h1>

            <FilmCard />
        </div>

    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;

main {
    min-height: calc(100vh - 100px);
    background-color: #181818;
    color: white;
    position: relative;

    .ricerca-nulla {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 35px;
        font-weight: bold;
    }

    h1 {
        text-align: center;
        padding: 50px 0;
        font-size: 50px;
    }


    hr {
        border-color: gray;
        margin-top: 50px;
    }
}
</style>