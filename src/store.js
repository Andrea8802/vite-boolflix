import { reactive } from "vue"
export const store = reactive({
    filmAPIURL: "https://api.themoviedb.org/3/search/movie?api_key=b7542e2de57a2e816ff4d68245a8aef4&language=it",
    seriesAPIURL: "https://api.themoviedb.org/3/search/tv?api_key=b7542e2de57a2e816ff4d68245a8aef4&language=it",
    filmTrovati: [],
    serieTrovate: [],
    bottoneCliccato: false,
    valoreRicerca: ""
})