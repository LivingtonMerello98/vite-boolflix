
<script>
export default {
    props: {
        movie: Object
    }
};
</script>
<template>
    <li>
        <h2>{{ movie.title }}</h2>
        <p><strong>Original Title:</strong> {{ movie.originalTitle }}</p>
        <p><strong>Language:</strong> {{ movie.language }}</p>
        <p><strong>Vote:</strong> {{ movie.vote }}</p>
    </li>
</template>