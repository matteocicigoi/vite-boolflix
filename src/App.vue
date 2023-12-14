<script>
import Search from './components/Search.vue';
import MovieList from './components/MovieList.vue';

import axios from 'axios';
import { store } from './store';

export default {
    components : {
        Search,
        MovieList
    },
    methods : {
        searchMovie(){
            axios.get(store.urlMovie + store.searchText).then((response => {
                store.movie = response.data.results;
            }));
        },
        searchSeries(){
            axios.get(store.urlSeries + store.searchText).then((response => {
                store.series = response.data.results;
            }));
        },
        searchAll() {
            this.searchMovie();
            this.searchSeries();
        }
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <Search @find="searchAll"/>
    <MovieList />

</template>

<style scoped>
</style>
