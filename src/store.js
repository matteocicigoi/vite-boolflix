import { reactive } from "vue";

export const store = reactive ({
    urlMovie : 'https://api.themoviedb.org/3/search/movie?api_key=2008115ba238ce063cedebda94390914&language=it&query=',
    urlSeries : 'https://api.themoviedb.org/3/search/tv?api_key=2008115ba238ce063cedebda94390914&language=it&query=',
    searchText : '',
    movie : [],
    series : [],
    request : null
})