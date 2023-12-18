import { reactive } from "vue";

export const store = reactive ({
    urlMovie : 'https://api.themoviedb.org/3/search/movie?api_key=2008115ba238ce063cedebda94390914&language=it&query=',
    urlSeries : 'https://api.themoviedb.org/3/search/tv?api_key=2008115ba238ce063cedebda94390914&language=it&query=',
    actor : 'https://api.themoviedb.org/3/REPLACE_TYPE/REPLACE_ID/credits?api_key=2008115ba238ce063cedebda94390914',
    genres : 'https://api.themoviedb.org/3/movie/REPLACE_ID?api_key=2008115ba238ce063cedebda94390914',
    searchText : '',
    movie : [],
    series : [],
    request : null,
    type : 'all'
})