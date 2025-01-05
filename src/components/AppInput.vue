<script>
/*AppInput si occupa di emettere verso AppHeader la query con la funzione EmitSearch()
*/

export default {

    name: 'AppInput',

    //variabili
    data() {

        return {
            // inizializiam0 la variabile per l'input come stringa vuota.
            query: '',
            profileUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png',
        };

    },

    //metodi
    methods: {

        // emette l'evento search con il valore della query.
        emitSearch() {
            this.$emit('search', this.query);

            // aggiorniamo nuovamente variabile query a stringa vuota
            this.query= ''
 
        }
    }
};
</script>

<template>

    <div class="m-2 d-flex align-items-center">

        <!-- v-model per doppio binding con la variabile query
         e evento keyUp.enter per chiamare emitSearch()  -->

        <input class="form-control small-input" 
        v-model="query" 
        @keyup.enter="emitSearch()" 
        placeholder="Cerca" />


        <!-- pulsante con evento click per chiamare emitSearch() -->
        <button type="button" 
        class="btn btn-danger mx-2 small-button" 
        @click="emitSearch()">Cerca</button>


        <div class="d-flex align-items-center">
            <font-awesome-icon :icon="['fas', 'bell']" class="text-white mx-1" />
            <img :src="profileUrl" alt="profile" class="profile mx-1" />
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



