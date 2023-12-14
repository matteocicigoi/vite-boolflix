<script>
export default {
    props : ['movie']
}
</script>
<template>
    <li>
        <h2>titolo: {{ movie.title }}</h2>
        <h2>titolo originale: {{ movie.original_title }}</h2>
        <h4>lingua: {{ movie.original_language }}</h4>
        <h2>voto: {{ movie.vote_average }}</h2>
    </li>
</template>