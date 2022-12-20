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

            // Risultati ricerca serie tv
            axios
                .get(store.ordineSerieAPI + store.ordineRisultati + "&language=" + store.linguaScelta)
                .then(res => {
                    store.serieTrovate = res.data.results
                    console.log(store.linguaScelta);
                })
                .catch(err => {
                    console.log("Errore", err);
                })


            // Risultati ricerca film
            axios
                .get(store.ordineFilmAPI + store.ordineRisultati + "&language=" + store.linguaScelta)
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

    <!-- Select per scegliere lingua -->
    <div>
        <label for="lingue">
            Lingua:
        </label>
        <select id="lingue" v-model="store.linguaScelta" @change="ordinaPerAPI">
            <option v-for="lingua in store.lingue" :value="lingua.iso_639_1">
                {{ lingua.english_name }}
            </option>

        </select>
    </div>


    <!-- Non mostrare questa selezione se la ricerca è stata fatta -->
    <div v-if="!store.ricercaEffettuata">
        <label for="ordinaPer">
            Mostra per:
        </label>

        <!-- Select per ordine risultati -->
        <select id="ordinaPer" v-model="store.ordineRisultati" @change="ordinaPerAPI">

            <option value="popularity.desc">
                Più popolari
            </option>

            <option value="popularity.asc">
                Meno popolari
            </option>

            <option value="vote_average.desc">
                Voti più alti
            </option>

            <option value="vote_average.asc">
                Voti più bassi
            </option>

            <option value="original_title.desc">
                Ordine alfabetico (A-Z)
            </option>

            <option value="original_title.asc">
                Ordine alfabetico (Z-A)
            </option>

            <option value="release_date.desc">
                Più recenti
            </option>

            <option value="release_date.asc">
                Meno recenti
            </option>

        </select>
    </div>


    <div v-else="">
        <label for="filtra">
            Mostra:
        </label>

        <!-- Select per filtrare risultati -->
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