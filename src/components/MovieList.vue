<script>
import Movie from './Movie.vue';

import { store } from '../store';
export default {
    components : {
        Movie
    },
    data() {
        return {
            store
        }
    }
};
</script>

<template>
    <ul>
        <Movie v-for="movie in store.movie" :movie="movie"/>
        <Movie v-for="serie in store.series" :serie="serie"/>
    </ul>
</template>