<script>
// Importiamo i componenti AppHeader e AppMain per utilizzarli in questo componente
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store';

export default {
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
        // Questo metodo chiama la funzione searchMovies dello store passando la query
        Search(query) {
            store.searchMovies(query);
        }
    }
};
</script>

<template>
    <div id="app">
        <AppHeader @search="Search" />
        <!-- Includiamo il componente AppMain e passiamo i risultati dello store come prop 'results' -->
        <AppMain :results="store.result" />
    </div>
</template>
