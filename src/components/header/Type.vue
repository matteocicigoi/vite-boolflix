<script>
/* Componente Menu */
export default {}
</script>
<template>
    <ul>
        <li>Film</li>
        <li>Tutto</li>
        <li>Serie Tv</li>
    </ul>
</template>

<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;
    ul {
        display: flex;
        list-style-type: none;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 0px 110px;
        color: $textPrimary;
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 20px;

        &::before, &::after {
            content: '';
            width: 5%;
            height: 1px;
            background-color: $textPrimary;

       }
       li {
        width: 5%;
        text-align: center;
       }
    }
</style>