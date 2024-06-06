
<script>
export default {
    // Definiamo i dati locali del componente
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
        }
    }
};
</script>

<template>
    <!-- Input field per la query di ricerca -->
    <input v-model="query" @keyup.enter="emitSearch" placeholder="Cerca" />
    <button @click="emitSearch">Search</button>
</template>
