import { reactive } from "vue"
export const store = reactive({
    // API per cercare elementi
    seriesAPI: "https://api.themoviedb.org/3/search/tv?api_key=b7542e2de57a2e816ff4d68245a8aef4&language=it&query=",
    serieTrovate: [],
    filmAPI: "https://api.themoviedb.org/3/search/movie?api_key=b7542e2de57a2e816ff4d68245a8aef4&language=it&query=",
    filmTrovati: [],

    // API per l'ordine in cui vedere gli elementi
    ordineSerieAPI: "https://api.themoviedb.org/3/discover/tv?api_key=b7542e2de57a2e816ff4d68245a8aef4&language=it&sort_by=",
    ordineFilmAPI: "https://api.themoviedb.org/3/discover/movie?api_key=b7542e2de57a2e816ff4d68245a8aef4&language=it&sort_by=",
    ordineRisultati: "",

    // API per generi degli elementi
    seriesGenAPI: "https://api.themoviedb.org/3/genre/tv/list?api_key=b7542e2de57a2e816ff4d68245a8aef4&language=it",
    generiSeries: [],
    filmGenAPI: "https://api.themoviedb.org/3/genre/movie/list?api_key=b7542e2de57a2e816ff4d68245a8aef4&language=it",
    generiFilm: [],


    filtroRicerca: "",
    valoreRicerca: "",
    ricercaEffettuata: false
})