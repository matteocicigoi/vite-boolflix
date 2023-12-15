<script>
/* Componente che genera la lista di Film e Serie Tv */
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

<style scoped lang="scss">
    ul {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        gap: 5px;
        list-style-type: none;
    }
</style>