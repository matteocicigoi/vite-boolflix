import { reactive } from "vue";

export const store = reactive ({
    url : 'https://api.themoviedb.org/3/search/movie?api_key=2008115ba238ce063cedebda94390914&language=it&query=',
    searchText : '',
    result : []
})