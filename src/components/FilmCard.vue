<script>
import { store } from '../store'

export default {
    name: "FilmCard",
    data() {
        return {
            store,
            lingueFilm: ["en", "it", "de", "fr", "es"]
        }
    }
}
</script>

<template>
    <section class="card" v-for="info in store.filmTrovati">
        <!-- Copertina -->
        <div class="copertina" v-if="info.poster_path === null">
            <img src="../assets/img/ImageNull.svg" alt="Immagine di errore" class="error">
        </div>

        <div class="copertina" v-else="">
            <img :src="'https://image.tmdb.org/t/p/original' + info.poster_path" alt="Immagine di copertina">
        </div>

        <div class="info-film">

            <!-- Titolo -->
            <div>
                <span class="identificativo">
                    Titolo:
                </span>
                <span>
                    {{ info.title }}
                </span>
            </div>

            <!-- Titolo originale -->
            <div v-if="info.title !== info.original_title">
                <span class="identificativo">
                    Titolo originale:
                </span>
                <span>
                    {{ info.original_title }}
                </span>
            </div>

            <!-- Bandiera Lingua -->
            <div v-for="lingua in lingueFilm" class="img-lingua">

                <span class="identificativo" v-if="info.original_language === lingua">
                    Lingua originale:
                </span>

                <img :src="'./src/assets/img/' + lingua + '.svg'" v-if="info.original_language === lingua"
                    :alt="'Bandiera ' + lingua">
            </div>

            <!-- Bandiera se non è disponibile quella della lingua richiesta -->
            <div v-if="!lingueFilm.includes(info.original_language)" class="img-lingua">
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
    </section>
</template>

<style lang="scss" scoped>
.card {
    background-color: black;
    color: white;
    border: 1px solid white;
    border-radius: 10px;
    position: relative;
    height: 380px;
    width: 255px;
    overflow-y: auto;

    &:hover .info-film {
        display: inline-block;
    }

    .copertina {
        height: 100%;
        max-width: 100%;

        img {
            height: 100%;
            max-width: 100%;
        }
    }

    .error {
        filter: invert(1);
    }

    .info-film {
        display: none;
        background-color: rgba($color: black, $alpha: 0.9);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        padding: 3px 10px 30px 8px;

        .identificativo {
            font-weight: bold;
            margin: 13px 8px 0 0;
            display: inline-block;
            text-decoration: underline;

        }

        .img-lingua img {
            width: 20px;
            border-radius: 20%;
            vertical-align: middle;
        }


        .stelle-votazione {
            color: yellow;
            margin: 0 1px;
        }

        .descrizione {
            line-height: 150%;
        }

        .descrizione.nulla {
            color: red;
            font-weight: bold;
        }
    }
}
</style>