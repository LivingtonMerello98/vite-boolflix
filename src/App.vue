<script>
//importiamo la costante store destrutturandola dal file sotre.js
import { store } from './store';


//Importiamo i componenti AppHeader e AppMain per utilizzarli in questo componente
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';


export default {

    //qui custodiamo le variabili
    data() {
        return {
            store
        };
    },

    // Registriamo i componenti
    components: {
        AppHeader,
        AppMain,
        AppFooter,
    },
    
    methods: {

        //metodo che chiama la funzione searchMovie nello store a cui passiamo query
        OnSearch(query) {
            store.searchMovies(query);
        }

    }

};
</script>

<template>
    <div id="app">
        <!--appheader passa un emit search ache attiva la funzione OnSearch -->
        <AppHeader @search="OnSearch" />

        <!-- Includiamo il componente AppMain e passiamo come prop :store.result -->
        <AppMain :results="store.result" />


        <AppFooter />

    </div>
</template>
