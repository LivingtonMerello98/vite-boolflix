<script>
export default {
    props: {
        movie: Object
    },
    computed: {
        flagUrl() {
            //maps per bandiera
            const flagMap = {
                'it': ('/flag/italy.png'),
                'en': ('/flag/usa.png'),
                'es': ('/flag/spain.png'),
                'ja': ('/flag/japan.png')
            };
            // url bandiera corrispondente alla lingua del film
            return flagMap[this.movie.language] || ('/flag/default.png');
        }
    }
};
</script>

<template>
    <li>
        <h2>{{ movie.title }}</h2>
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
