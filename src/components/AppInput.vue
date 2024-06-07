
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
    },
    computed: {
        profileUrl() {
            return 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        }
    }
};
</script>

<template>
    <div class="m-2 d-flex align-items-center">
        <!-- Input field per la query di ricerca -->
        <input class="form-control small-input" v-model="query" @keyup.enter="emitSearch" placeholder="Cerca" />
        <button type="button" class="btn btn-danger mx-2 small-button" @click="emitSearch">Cerca</button>

        <div class="d-flex align-items-center">
            <font-awesome-icon :icon="['fas', 'bell']" class="text-white mx-1" />
            <img :src="profileUrl" alt="profile" class="profile mx-1" />
            <!-- <font-awesome-icon :icon="['fas', 'caret-down']" class="arrow-down text-white mx-1" /> -->
        </div>

    </div>
</template>

<style lang="scss" scoped>
/* Stili per ridurre le dimensioni dell'input e del pulsante */
.small-input {
    width: 150px;
    padding: 0.25rem;
    font-size: 0.875rem;
}

.small-button {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
}

.profile {
    width: 25px;
    height: auto;
}

.arrow-down {
    font-size: 0.8rem;
}
</style>



