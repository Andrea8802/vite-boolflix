<script>
import { store } from '../store'
export default {
    name: "FilmList",
    data() {
        return {
            store,
            lingueFilm: ["en", "it", "de", "fr", "es"],
        }
    },
    mounted() {

    }
}
</script>

<template>
    <section>
        <!-- DEBUG -->
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

            <div v-if="!lingueFilm.includes(info.original_language)" class="img-lingua-error">

                <img src="../assets/img/xx.svg" alt="Bandiera Sconosciuta">


            </div>


            <div>
                {{ info.vote_average }}
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
section {
    background-color: #181818;
    min-height: calc(100vh - 100px);

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

    .img-lingua-error {
        width: 25px;

        img {
            width: 100%;
            border-radius: 50%;
            filter: invert(1);

        }
    }

    div {
        color: white;
    }
}
</style>