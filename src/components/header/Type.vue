<script>
/* Componente Menu */
import { store } from '../../store';
export default {
    data() {
        return {
            store
        }
    },
    methods : {
        selectFn(data){
            this.store.type = data;
        }
    }
}
</script>
<template>
    <ul>
        <li :class="{selected : store.type === 'movies'}" @click="selectFn('movies')">Film</li>
        <li :class="{selected : store.type === 'all'}" @click="selectFn('all')">Tutto</li>
        <li :class="{selected : store.type === 'series'}" @click="selectFn('series')">Serie Tv</li>
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
        cursor: pointer;
        &.selected{
            color: red;
        }
       }
    }

    /* responsive */

    @media screen and (max-width: 1200px ){
        ul {
            padding: 0;
        }
    }
    @media screen and (max-width: 992px ){
        ul {
            li {
                width: 7%;
            }
            &::before, &::after {
            width: 10%;

            }
        }
    }
    @media screen and (max-width: 576px ){
        ul {
            li {
                width: 10%;
            }
        }
    }
</style>