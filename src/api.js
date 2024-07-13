import axios from "axios";
const API_KEY = '7d66e75e2db8f75d0248f504fd3d57c8';

const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDY2ZTc1ZTJkYjhmNzVkMDI0OGY1MDRmZDNkNTdjOCIsIm5iZiI6MTcyMDg4MTIzNS43Mjk5ODQsInN1YiI6IjY2OTExZmYxYjZkOGU5NWUzOWNjOTg1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.riT2B9ewvOOO8LZe4C49y4CW4ofr-Yqm9f27XL6Hqzw' 
    }
}

axios.get(url, options)
.then(response => console.log(response))
.catch(err => console.error(err));
