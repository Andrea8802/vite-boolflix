<script>
import { store } from '../store'

export default {
    name: "FilmCard",
    data() {
        return {
            store,
            lingueDisponibili: ["en", "it", "de", "fr", "es"]
        }
    }
}
</script>

<template>
    <div class="list">
        <div class="card" v-for="info in store.filmTrovati">
            <!-- Copertina -->
            <div class="copertina" v-if="info.poster_path === null">
                <img src="../assets/img/ImageNull.svg" alt="Immagine di errore" class="error">
            </div>

            <div class="copertina" v-else="">
                <img :src="'https://image.tmdb.org/t/p/w342' + info.poster_path" alt="Immagine di copertina">
            </div>

            <div class="info-elemento">
                <!-- Titolo -->
                <div>
                    <span class="identificativo">
                        Titolo:
                    </span>

                    <span>
                        {{ info.name }}
                    </span>

                </div>


                <!-- Titolo originale -->
                <div>
                    <div v-if="info.name !== info.original_name">
                        <span class="identificativo">
                            Titolo originale:
                        </span>
                        <span>
                            {{ info.original_name }}
                        </span>
                    </div>
                </div>

                <!-- Bandiera Lingua -->
                <div v-for="lingua in lingueDisponibili" class="img-lingua">

                    <span class="identificativo" v-if="info.original_language === lingua">
                        Lingua originale:
                    </span>

                    <img :src="'./src/assets/img/' + lingua + '.svg'" v-if="info.original_language === lingua"
                        :alt="'Bandiera ' + lingua">
                </div>

                <!-- Bandiera se non è disponibile quella della lingua richiesta -->
                <div v-if="!lingueDisponibili.includes(info.original_language)" class="img-lingua">
                    <span class="identificativo">
                        Lingua non disponibile:
                    </span>
                    <img src="../assets/img/xx.svg" alt="Bandiera Sconosciuta" class="error">
                </div>

                <!-- Voto in stelle -->
                <div>
                    <span class="identificativo">
                        Voto:
                    </span>

                    <span v-for="numero in 5">
                        <fa icon="fa-solid fa-star" v-if="Math.ceil(info.vote_average / 2) >= numero"
                            class="stelle-votazione" />
                        <fa icon="fa-regular fa-star" v-else-if="Math.ceil(info.vote_average / 2) < numero"
                            class="stelle-votazione" />
                    </span>
                </div>

                <!-- Descrizione -->
                <div>
                    <span class="identificativo">
                        Descrizione:
                    </span>

                    <!-- Aggiungere quella inglese in sostituzione -->
                    <span v-if="info.overview === ''" class="descrizione nulla">
                        Descrizione non disponibile in questa lingua
                    </span>

                    <span v-else="" class="descrizione">
                        {{ info.overview }}
                    </span>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;

@include card-layout
</style>