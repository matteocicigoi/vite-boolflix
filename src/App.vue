<script>
import MovieList from './components/main/MovieList.vue';
import Header from './components/header/Header.vue';

import axios from 'axios';
import { store } from './store';

export default {
    components : {
        MovieList,
        Header
    },
    methods : {
        apiRequest(type){
            store.request = false;
            let url;
            let obj;
            if(type === 'movie'){
                url = store.urlMovie;
                obj = 'movie';
            }
            if(type === 'series'){
                url = store.urlSeries;
                obj = 'series';
            }

            axios.get(url + store.searchText).then((response => {
                store[obj] = response.data.results;
                store.request = true;
            }));
        },
        searchAll() {
            this.apiRequest('movie');
            this.apiRequest('series');
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
    <Header @find="searchAll" />
    <MovieList />
</template>

<style scoped>
</style>
