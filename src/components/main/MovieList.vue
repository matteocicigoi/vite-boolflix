<script>
/* Componente che genera la lista di Film e Serie Tv */
import Movie from './Movie.vue';
import Loading from './Loading.vue';

import { store } from '../../store';
export default {
    components : {
        Movie,
        Loading
    },
    data() {
        return {
            store
        }
    },
    computed : {
        infoText(){
            if(this.store.movie.length < 1 && this.store.series.length < 1){
                if(this.store.request === null){
                    return 'Cerca un Film/Serie TV';
                }else if(this.store.request === true){
                    return 'Nessun risultato trovato';
                }
            }
            if(this.store.request === false){
                return 'loading';
            }
            return false;
        }
    },
    methods : {
        // modifica le chiavi del oggetto e li aggiunge il tipo
        editResult(obj, type){
            const result = {};
            if(type === 'serie'){
                result.type = 'serie';
            }else if(type === 'movie'){
                result.type = 'movie';
            }

            for(let element in obj){
                if(element === 'name'){
                    result.title = obj[element];
                }else if(element === 'original_name'){
                    result.original_title = obj[element];
                }else{
                    result[element] = obj[element];
                }
            }
            return result;
        }
    }
};
</script>

<template>
    <div class="info" v-if="infoText">
        <Loading v-if="infoText === 'loading'"/>
        <span v-else>{{ infoText }}</span>
    </div>
    <ul v-if="store.request !== false">
        <Movie v-show="store.type === 'movies' || store.type === 'all'" v-for="movie in store.movie" :movieOrSerie="editResult(movie, 'movie')"/>
        <Movie v-show="store.type === 'series' || store.type === 'all'" v-for="serie in store.series" :movieOrSerie="editResult(serie, 'serie')"/>
    </ul>
</template>

<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;
    ul {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        gap: 5px;
        list-style-type: none;
    }
    .info {
        margin: 0 auto;
        margin-top: 50px;
        text-align: center;
        span{
            text-align: center;
            color: $textPrimary;
            border: 1px solid $brPrimary;
            padding: 50px;
            font-size: 30px;
        }
    }
</style>