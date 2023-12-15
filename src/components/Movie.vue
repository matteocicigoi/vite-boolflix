<script>
/* Componente singolo film o serie tv */
export default {
    props : ['movie', 'serie'],
    methods : {
        // icona della bandiera
        flag(lang){
            if(lang === 'en'){
                return '<span class="fi fi-gb"></span>';
            }else if( lang === 'it'){
                return '<span class="fi fi-it"></span>';
            }
            return lang;
        },
        // recupera le informazioni
        typeFn(){
            if(this.movie !== undefined){
                return [
                    'movie',
                    this.movie.title,
                    this.movie.original_title,
                    this.movie.original_language,
                    this.movie.vote_average,
                    this.movie.poster_path
                ];
            }else{
                return [
                    'tv serie',
                    this.serie.name,
                    this.serie.original_name,
                    this.serie.original_language,
                    this.serie.vote_average,
                    this.serie.poster_path
                ];
            }
        },
        // trasforma il voto in un numero intero tra 1 a 5
        voteFn(number){
            let result;
            result = Math.round(number / 2);
            if(result <= 0)result++;
            return result;
        }
    },
}
</script>
<template>
    <li>
        <div class="type" :class=" typeFn()[0]"><span>{{ typeFn()[0] }}</span></div>
        <div class="hidden">
            <div class="text">
            <h2 class="title">{{ typeFn()[1] }}</h2>
            <h4 class="original-title">({{ typeFn()[2] }})</h4>
            <h4 class="language"><span v-html="flag(typeFn()[3])"></span></h4>
            <ul class="vote">
                <li v-for="n in 5">
                    <font-awesome-icon v-if="n <= voteFn(typeFn()[4])" icon="fa-solid fa-star" />
                    <font-awesome-icon v-else icon="fa-regular fa-star" />
                </li>
            </ul>
        </div>
        </div>
        <img v-if="typeFn()[5] !== null" :src="`https://image.tmdb.org/t/p/w342${typeFn()[5]}`" :alt="typeFn()[1]">
        <div class="withoutImage" v-else><h2>{{ typeFn()[1] }}</h2></div>
    </li>
</template>

<style scoped lang="scss">
@use '../assets/style/partials/_variables.scss' as *;
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
            }

            .title {
                padding-top: 10px;
                background-color: $bgBody;
            }
            .original-title,
            .language,
            ul {
                background-color: $bgBody;
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
</style>