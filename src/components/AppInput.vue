
<script>
export default {
    //dichiaro gli eventi che il componente emette
    emits: ['search'],

    data() {
        return {
            // Inizializziamo la variabile query a una stringa vuota
            query: ''
        };
    },
    methods: {
        emitSearch() {
            // Quando chiamato, questo metodo emette l'evento 'search' con il valore corrente della query
            this.$emit('search', this.query);
            console.log('search pressed')
        }
    }
};
</script>

<template>
    <div class="m-2">
        <!-- Input field per la query di ricerca -->
        <input v-model="query" @keyup.enter="emitSearch" placeholder="Cerca" />
        <button type="button" class="btn btn-danger mx-2" @click="emitSearch">Search</button>
    </div>
</template>



