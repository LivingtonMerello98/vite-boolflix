<script>
export default {
    props: {
        movie: Object
    },
    methods: {
        imageUrl() {
            // controllo se la path non è null
            if (this.movie.poster_path) {
                // URL completo dell'immagine
                return `https://image.tmdb.org/t/p/w342${this.movie.poster_path}`;
            } else {
                // se la path è null -imagine momentanea
                return 'https://us.123rf.com/450wm/koblizeek/koblizeek2208/koblizeek220800128/190320173-no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-placeholder.jpg';
            }
        }
    },
    computed: {
        flagUrl() {
            // maps per bandiera
            const flagMap = {
                'it': '/flags/italy.png',
                'en': '/flags/usa.png',
                'es': '/flags/spain.png',
                'ja': '/flags/japan.png'
            };
            // url bandiera corrispondente alla lingua del film
            return flagMap[this.movie.language] || '/flags/default.png';
        }
    }
};
</script>

<template>
    <li>
        <img :src="imageUrl()" :alt="movie.title" class="poster" />
        <h2>{{ movie.title }}</h2>
        <p><strong>Type:</strong> {{ movie.type === 'movie' ? 'Film' : 'Serie TV' }}</p>
        <p><strong>Original Title:</strong> {{ movie.originalTitle }}</p>
        <p>
            <strong>Language:</strong>
            <img :src="flagUrl" :alt="movie.language" class="flag" />
        </p>
        <p><strong>Vote:</strong> {{ movie.vote }}</p>
        <font-awesome-icon :icon="['fas', 'star-of-life']" />
    </li>
</template>

<style>
.flag {
    width: 20px;
    height: auto;
}

.poster {
    width: 200px;
    height: auto;
}
</style>
