<script>
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
                    this.movie.title,
                    this.movie.original_title,
                    this.movie.original_language,
                    this.movie.vote_average
                ];
            }else{
                return [
                    this.serie.name,
                    this.serie.original_name,
                    this.serie.original_language,
                    this.serie.vote_average
                ];
            }
        }
    },
}
</script>
<template>
    <li>
        <h2>titolo: {{ typeFn()[0] }}</h2>
        <h2>titolo originale: {{ typeFn()[1] }}</h2>
        <h4>lingua: <span v-html="flag(typeFn()[2])"></span></h4>
        <h2>voto: {{ typeFn()[3] }}</h2>
    </li>
</template>