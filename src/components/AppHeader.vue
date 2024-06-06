
<script>
import AppInput from './AppInput.vue';

export default {
    components: {
        AppInput,
    },
    methods: {
        //gestione della funzione del componente figlio AppInput
        handleSearch(query) {
            //riemette a sua volta l'evento search
            this.$emit('search', query);
        }
    }
};
</script>

<template>
    <header>
        <AppInput @search="handleSearch" />
    </header>
</template>
