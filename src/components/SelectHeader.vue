<script>
import { store } from '../store'
import axios from 'axios';

export default {
    name: "SelectHeader",
    data() {
        return {
            store
        }
    },
    methods: {
        ordinaPerAPI() {
            let copyOrdineSerieAPI = store.ordineSerieAPI
            copyOrdineSerieAPI += store.ordineRisultati

            axios
                .get(copyOrdineSerieAPI)
                .then(res => {
                    store.serieTrovate = res.data.results

                })
                .catch(err => {
                    console.log("Errore", err);
                })

            let copyOrdineFilmAPI = store.ordineFilmAPI
            copyOrdineFilmAPI += store.ordineRisultati

            axios
                .get(copyOrdineFilmAPI)
                .then(res => {
                    store.filmTrovati = res.data.results
                })
                .catch(err => {
                    console.log("Errore", err);
                })

        }

    }
}
</script>

<template>

    <div v-if="!store.ricercaEffettuata">
        <label for="ordinaPer">
            Sfoglia per:
        </label>

        <select id="ordinaPer" v-model="store.ordineRisultati" @change="ordinaPerAPI">

            <option value="popularity.desc">
                Popolarità
            </option>

            <option value="vote_average.desc">
                Voti più alti
            </option>

        </select>
    </div>

    <div>
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
    </div>
</template>

<style lang="scss" scoped>
label {
    color: white;
    font-weight: bold;
    margin-right: 3px;
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
</style>