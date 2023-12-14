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
            axios.get(store.url + store.searchText).then((response => {
                store.result = response.data.results;
            }));
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
    <Search @find="searchMovie"/>
    <MovieList />

</template>

<style scoped>
</style>
