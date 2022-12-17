<script>
import { store } from '../store'
import FilmCard from './FilmCard.vue';
import SeriesCard from './SeriesCard.vue';
import FilmCard from './SeriesCard.vue';

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
        <FilmCard />
        <SeriesCard />
    </main>
</template>

<style lang="scss" scoped>
main {
    min-height: calc(100vh - 100px);
}
</style>