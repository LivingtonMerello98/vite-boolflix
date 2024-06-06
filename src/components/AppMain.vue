<script>
import AppCard from './AppCard.vue';

export default {
    props: {
        results: Array
    },
    components: {
        AppCard
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