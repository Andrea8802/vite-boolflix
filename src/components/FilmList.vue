<script>
import { store } from '../store'
export default {
    name: "FilmList",
    data() {
        return {
            store,
            lingueFilm: ["en", "it", "de", "fr", "es"]
        }
    }
}
</script>

<template>
    <section>
        <!-- DEBUG (Da spostare in un componente una volta sistemato lo stile) -->
        <h1>
            FILM
        </h1>

        <div class="film" v-for="info in store.filmTrovati">

            <div>
                {{ info.title }}
            </div>

            <div>
                {{ info.original_title }}
            </div>

            <div v-for="lingua in lingueFilm" class="img-lingua">

                <img :src="'./src/assets/img/' + lingua + '.svg'" v-if="info.original_language === lingua"
                    :alt="'Bandiera ' + lingua">

            </div>

            <div v-if="!lingueFilm.includes(info.original_language)" class="img-lingua error">

                <img src="../assets/img/xx.svg" alt="Bandiera Sconosciuta">


            </div>

            <div class="copertina">
                <img :src="'https://image.tmdb.org/t/p/original' + info.poster_path" alt="">
            </div>

            <div>

                <span v-for="numero in 5">
                    <fa icon="fa-solid fa-star" v-if="Math.ceil(info.vote_average / 2) >= numero" />
                    <fa icon="fa-regular fa-star" v-else-if="Math.ceil(info.vote_average / 2) < numero" />
                </span>

            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
section {
    background-color: #181818;
    min-height: calc(100vh - 100px);
    color: white;

    .film {
        border: 1px solid white;
        margin: 30px 0;
    }

    .img-lingua {
        width: 25px;

        img {
            width: 100%;
            border-radius: 50%;

        }
    }

    .error image {
        filter: invert(1);
    }

    .copertina {
        width: 250px;

        img {
            width: 100%;
        }
    }
}
</style>