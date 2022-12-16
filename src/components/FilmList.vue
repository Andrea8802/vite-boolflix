<script>
import { store } from '../store'
export default {
    name: "FilmList",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section>
        <!-- DEBUG -->
        <div v-for="info in store.filmTrovati">

            <div>
                {{ info.title }}
            </div>

            <div>
                {{ info.original_title }}
            </div>

            <div>
                {{ info.original_language }}
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

    div {
        color: white;
    }
}
</style>