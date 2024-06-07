
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
        <div class="container">
            <div class="row">
                <div class="col-6"></div>
                <div class="col-6 d-flex justify-content-end">
                    <AppInput @search="handleSearch" />
                </div>
            </div>
        </div>
    </header>
</template>
