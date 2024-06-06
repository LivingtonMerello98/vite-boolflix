<script>

export default {
    props: {
        movie: Object
    },
    computed: {
        flagUrl() {
            //maps per bandiera
            const flagMap = {
                'it': ('/flags/italy.png'),
                'en': ('/flags/usa.png'),
                'es': ('/flags/spain.png'),
                'ja': ('/flags/japan.png')
            };
            // url bandiera corrispondente alla lingua del film
            return flagMap[this.movie.language] || ('/flags/default.png');
        }
    }
};
</script>

<template>
    <li>
        <h2>{{ movie.title }}</h2>
        <p><strong>Type:</strong> {{ movie.type === 'movie' ? 'Film' : 'Serie TV' }}</p>
        <p><strong>Original Title:</strong> {{ movie.originalTitle }}</p>
        <p>
            <strong>Language:</strong>
            <img :src="flagUrl" :alt="movie.language" class="flag" />
        </p>
        <p><strong>Vote:</strong> {{ movie.vote }}</p>
    </li>
</template>

<style>
.flag {
    width: 20px;
    height: auto;
}
</style>
