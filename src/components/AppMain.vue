<script>
import AppCard from './AppCard.vue';
import { store } from '../store';

export default {
    props: {
        //
        results: Array
    },

    data() {
        return {
            store
        };
    },
    components: {
        AppCard
    },
    created() {
        //esmpio di ricerca iniziale nel main
        this.store.searchMovies('back to the future');
    },
    watch: {
        results(newResults) {
            console.log('risultati stampati:', newResults.length);
        }
    }
};
</script>

<template>
    <main>
        <ul>
            <AppCard v-for="movie in results" :key="movie.title" :movie="movie" />
        </ul>
    </main>
</template>