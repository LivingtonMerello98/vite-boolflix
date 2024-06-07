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
        },
        generateStars(vote) {
            const stars = [];
            for (let i = 1; i <= 5; i++) {
                if (i <= vote) {
                    stars.push(['fas', 'star']); // Stella piena
                } else {
                    stars.push(['far', 'star']); // Stella vuota
                }
            }
            return stars;
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
    <!-- cars -->
    <div class="col-3">
        <b-card class="mb-3">
            <img :src="imageUrl()" :alt="movie.title" class="poster" />
            <div class="card-body text-white">
                <h4 class="card-title">{{ movie.title }}</h4>
                <p class="card-text"><strong>Type:</strong> {{ movie.type === 'movie' ? 'Film' : 'Serie TV' }}</p>
                <p class="card-text"><strong>Original Title:</strong> {{ movie.originalTitle }}</p>
                <p class="card-text">
                    <strong>Language:</strong>
                    <img :src="flagUrl" :alt="movie.language" class="flag" />
                </p>
                <p class="card-text"><strong>Vote:</strong> {{ movie.vote }}</p>
                <div class="stars">
                    <font-awesome-icon v-for="(star, index) in generateStars(movie.vote)" :key="index" :icon="star"
                        class="star-icon" />
                </div>
            </div>
        </b-card>
    </div>
</template>

<style>
.flag {
    width: 20px;
    height: auto;
}

.poster {
    width: 40%;
    height: auto;
}

.stars {
    display: flex;
}

.star-icon {
    color: gold;
    margin-right: 4px;
}
</style>
