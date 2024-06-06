<script>
import AppCard from './AppCard.vue';

export default {
    props: {
        //
        results: Array
    },
    components: {
        AppCard
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