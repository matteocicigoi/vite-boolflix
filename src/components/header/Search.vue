<script>
/* Componente che permette la ricerca di film e serie tv */
import { store } from '../../store';
export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="search">
        <label for="search">Cerca: </label>
        <input type="text" id="searchF" v-model="store.searchText" @keyup.enter="$emit('find')" placeholder="Cerca">
        <button @click="$emit('find')">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/style/partials/_variables.scss' as *;
    .search {
        width: max-content;
        margin: 0 auto;
        padding: 20px;
        
        label {
            display: none;
        }

        button, input {
            all: unset;
            cursor: pointer;
            color: $textSecondary;
            background-color: $textPrimary;
            border: none;
            padding: 10px;
            border-radius: 0px 10px 10px 0px;
        }

        input {
            cursor: text;
            border-radius: 10px 0px 0px 10px;
        }
    }
</style>