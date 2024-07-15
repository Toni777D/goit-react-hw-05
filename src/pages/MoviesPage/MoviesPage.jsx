import MovieList from "../../components/MovieList/MovieList";
import { useState } from "react";
import {searchMovie} from "../../api";
import styles from "./MoviesPage.module.css"

export default function MoviesPage() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSearch = async (event) => {
        event.preventDefault();
        const movies = await searchMovie(query);
        setMovies(movies);
    }
    return (
        <div>
            <h2>Search movies</h2>
            <form className={styles.form} onSubmit={handleSearch}>
                <input 
                className={styles.input}
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} />
                <button className={styles.btn} type="submit">Search</button>
            </form>
            <MovieList movies={movies}/>
        </div>
    )
}