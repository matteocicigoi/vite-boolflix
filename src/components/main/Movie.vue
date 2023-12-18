<script>
/* Componente singolo film o serie tv */
export default {
    props : ['movieOrSerie'],
    computed : {
        // trasforma il voto in un numero intero tra 1 a 5
        voteFn(){
            let result;
            result = Math.round(this.movieOrSerie.vote_average / 2);
            if(result <= 0)result++;
            return result;
        },
        // icona della bandiera
        flag(){
            if(this.movieOrSerie.original_language === 'en'){
                return '<span class="fi fi-gb"></span>';
            }else if(this.movieOrSerie.original_language === 'it'){
                return '<span class="fi fi-it"></span>';
            }
            return this.movieOrSerie.original_language;
        },
        // riduce la lunghezza della descrizione
        cutOverview(){
            let overview = this.movieOrSerie.overview;
            if(overview.length >= 100){
                return overview.substr(0, 100) + '...';
            }
            return overview;
        }
    }
}
</script>
<template>
    <li>
        <div class="type" :class="movieOrSerie.type"><span>{{ movieOrSerie.type === 'serie' ? 'tv ' + movieOrSerie.type : movieOrSerie.type }}</span></div>
        <div class="hidden">
            <div class="text">
            <h2 class="title">{{ movieOrSerie.title }}</h2>
            <h4 class="original-title">({{ movieOrSerie.original_title }})</h4>
            <h4 class="language"><span v-html="flag"></span></h4>
            <ul class="vote">
                <li v-for="n in 5">
                    <font-awesome-icon v-if="n <= voteFn" icon="fa-solid fa-star" />
                    <font-awesome-icon v-else icon="fa-regular fa-star" />
                </li>
            </ul>
            <h4 class="overview">{{ cutOverview }}</h4>
        </div>
        </div>
        <img v-if="movieOrSerie.poster_path !== null" :src="`https://image.tmdb.org/t/p/w342${movieOrSerie.poster_path}`" :alt="movieOrSerie.title">
        <div class="withoutImage" v-else><h2>{{ movieOrSerie.title }}</h2></div>
    </li>
</template>

<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;
    li {
        width: calc((100% - 25px) / 6);
        border: double $brPrimary;
        box-shadow: 0px 0px 10px -2px $swPrimary;
        padding: 10px;
        position: relative;

        .hidden {
            display: none;
        }
        img {
            display: block;
            width: 100%;
        }

        .withoutImage {
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            color: $textPrimary;
        }
        .type {
            position: absolute;
            top: 0;
            right: 0;
            text-transform: uppercase;
            color: $textPrimary;
            padding: 5px;
            box-shadow: 0px 0px 8px -2px $swSecondary;
            &.movie {
                background-color: red;
            }
            &.serie {
                background-color: blue;
            }
        }
    }
    li:hover {

        div.hidden {
            display: flex;
            flex-direction: row;
            position: absolute;
            align-items: flex-end;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            backdrop-filter: blur(5px)  grayscale(100%);
            color: $textPrimary;
            text-align: center;

            .text {
                width: 100%;
                background-color: $bgBody;
                padding: 10px;
            }
            ul {
                display: flex;
                justify-content: center;
                align-items: center;
                color: $textVote;
                list-style-type: none;
                

                li {
                    border: none;
                    box-shadow: none;   
                }
            }
        }
    }

    /* responsive */

    @media screen and (max-width: 1200px ){
        li {
            width: calc((100% - 15px) / 4);
        }
    }
    @media screen and (max-width: 992px ){
        li {
            width: calc((100% - 10px) / 3);
        }
    }
    @media screen and (max-width: 576px ){
        li {
            width: calc((100%) / 1);
        }
    }
    
</style>