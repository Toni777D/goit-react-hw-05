import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDY2ZTc1ZTJkYjhmNzVkMDI0OGY1MDRmZDNkNTdjOCIsIm5iZiI6MTcyMDg4MTIzNS43Mjk5ODQsInN1YiI6IjY2OTExZmYxYjZkOGU5NWUzOWNjOTg1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.riT2B9ewvOOO8LZe4C49y4CW4ofr-Yqm9f27XL6Hqzw'
    }
  });

export const getTrending = async () => {
    const response = await api.get('/trending/movie/day');
    return response.data.results;
}

export const searchMovie = async (query) => {
    const response = await api.get(`/search/movie?query=${query}`);
    return response.data.results;
}

export const getMovieDetails = async (movieId) => {
    const response = await api.get(`/movie/${movieId}`);
    return response.data;
}

export const getMovieCredits = async (movieId) => {
    const response = await api.get(`/movie/${movieId}/credits`);
    return response.data.cast;
}
export const getMovieReviews = async (movieId) => {
    const response = await api.get(`/movie/${movieId}/reviews`);
    return response.data.results;
}


// axios.get(url, options)
// .then(response => console.log(response))
// .catch(err => console.error(err));
