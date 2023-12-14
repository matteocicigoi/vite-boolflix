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
        <Movie v-for="movie in store.result" :movie="movie"/>
    </ul>
</template>