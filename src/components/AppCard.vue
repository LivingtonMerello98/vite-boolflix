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
    <!-- card -->
    <div class="col-3 mb-3">
        <div class="card bg-dark text-white border-0 position-relative">
            <img :src="imageUrl()" :alt="movie.title" class="card-img-top rounded-2" />
            <div class="card-hover-info bg-body-black text-white">
                <h5 class="card-title">{{ movie.title }}</h5>
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
        </div>
    </div>
</template>

<style>
.flag {
    width: 20px;
    height: auto;
}

.stars {
    display: flex;
}

.star-icon {
    color: gold;
    margin-right: 4px;
    font-size: 0.8rem;
}

.card-hover-info {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 20px;
    z-index: 1;
}

.card:hover .card-hover-info {
    display: block;
}
</style>
