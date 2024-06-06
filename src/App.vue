<script>
// Importiamo i componenti AppHeader e AppMain per utilizzarli in questo componente
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
// Importiamo lo store che contiene lo stato globale e la logica per chiamare l'API
import { store } from './store';

export default {
    // Registriamo i componenti che verranno usati in questo componente
    components: {
        AppHeader,
        AppMain,
    },
    data() {
        return {
            store
        };
    },
    methods: {

        OnSearch(query) {
            //la funzione searchMovie è definita nell store.js che prende il parametro query 
            //specificato in AppInput
            store.searchMovies(query);
        }
    }
};
</script>

<template>
    <div id="app">
        <!--appheader passa search a appVue che gestisce l evento in Search-->
        <AppHeader @search="OnSearch" />
        <!-- Includiamo il componente AppMain e passiamo i risultati dello store come prop 'results' -->
        <AppMain :results="store.result" />
    </div>
</template>
