import { reactive } from "vue"
export const store = reactive({
    filmAPI: "https://api.themoviedb.org/3/search/movie?api_key=b7542e2de57a2e816ff4d68245a8aef4&language=it",
    seriesAPI: "https://api.themoviedb.org/3/search/tv?api_key=b7542e2de57a2e816ff4d68245a8aef4&language=it",

    filmPopolariAPI: "https://api.themoviedb.org/3/movie/popular?api_key=b7542e2de57a2e816ff4d68245a8aef4&language=it",
    seriePopolariAPI: "https://api.themoviedb.org/3/tv/popular?api_key=b7542e2de57a2e816ff4d68245a8aef4&language=it",

    serieTrovate: [],
    filmTrovati: [],
    filmSeriesTrovati: [],
    titoloRicercato: false,
    filtroRicerca: "",
    valoreRicerca: ""
})