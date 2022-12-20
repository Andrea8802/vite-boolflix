import { reactive } from "vue"
export const store = reactive({
    filmAPI: "https://api.themoviedb.org/3/search/movie?api_key=b7542e2de57a2e816ff4d68245a8aef4&language=it",
    seriesAPI: "https://api.themoviedb.org/3/search/tv?api_key=b7542e2de57a2e816ff4d68245a8aef4&language=it",

    ordineSerieAPI: "https://api.themoviedb.org/3/discover/tv?api_key=b7542e2de57a2e816ff4d68245a8aef4&language=it&sort_by=",

    ordineFilmAPI: "https://api.themoviedb.org/3/discover/movie?api_key=b7542e2de57a2e816ff4d68245a8aef4&language=it&sort_by=",

    serieTrovate: [],
    filmTrovati: [],
    ordineRisultati: "",
    filtroRicerca: "",
    valoreRicerca: "",
    ricercaEffettuata: false
})