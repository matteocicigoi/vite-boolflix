<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <label for="search">Cerca: </label>
    <input type="text" id="search" v-model="store.searchText">
    <button @click="$emit('find')">Invia</button>
</template>