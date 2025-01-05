<script>
//importiamo i componenti
import AppCard from './AppCard.vue';
import { store } from '../store';

export default {
    props: {
        results:{
            type:Array,
            require: true
        }
    },

    data() {
        return {
            store,
            searchTerms: [
                'back to the future',
                'the matrix',
                'inception',
                'interstellar',
                'the godfather',
                'pulp fiction',
                'the dark knight',
                'fight club',
                'forrest gump',
                'gladiator',
                'superman',
                'batman',
                'ironman',
                'spiderman'
            ]
        };
    },
    components: {
        AppCard
    },
    created() {
        // indice casuale su searchTearms
        const randomIndex = Math.floor(Math.random() * this.searchTerms.length);
        const randomSearchTerm = this.searchTerms[randomIndex];
        this.store.searchMovies(randomSearchTerm);
    },
    watch: {
        results(newResults) {
            console.log('risultati stampati:', newResults.length);
        }
    }
};
</script>

<template>
    <main class="bg-dark">
        <div class="container py-5">
            <div class="row">
                <h1 class="py-4 text-white">Goditi i tuoi film preferiti</h1>
                <AppCard v-for="movie in results" :key="movie.title" :movie="movie" />
            </div>
        </div>
    </main>
</template>
