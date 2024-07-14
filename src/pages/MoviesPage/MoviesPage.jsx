import MovieList from "../../components/MovieList/MovieList";
import { useState } from "react-router-dom";
import {searchMovie} from "../../api"

export default function MoviesPage() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSearch = async (event) => {
        event.preventDefault();
        const movies = await searchMovies(query);
        setMovies(movies);
    }
    return (
        <div>
            <h2>Search movies</h2>
            <form onSubmit={handleSearch}>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            <MovieList movies={movies}/>

        </div>
    )
}