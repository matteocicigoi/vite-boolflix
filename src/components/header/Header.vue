<script>
/* Componente Header */
import Search from './Search.vue';
import Logo from './Logo.vue';
import Type from './Type.vue';
export default {
    components : {
        Search,
        Logo,
        Type
    }
}
</script>

<template>
    <header>
        <Logo />
        <Type />
        <Search @find="$emit('find')"/>
    </header>
</template>

<style scoped lang="scss">
</style>