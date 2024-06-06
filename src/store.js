import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    result: [],
    info: {},
    apiUrl: 'https://api.themoviedb.org/3/search/movie',
    apiKey: '55d225bdb3e209cf2f546c83d3db58cf',

    searchMovies(query) {
        const url = `${this.apiUrl}?api_key=${this.apiKey}&query=${query}`;
        axios.get(url)
            .then(response => {
                this.result = response.data.results.map(movie => ({
                    title: movie.title,
                    originalTitle: movie.original_title,
                    language: movie.original_language,
                    vote: movie.vote_average
                }));
            })
    }
});
