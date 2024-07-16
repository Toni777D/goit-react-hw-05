import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import {searchMovie} from "../../api";
import styles from "./MoviesPage.module.css"
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [searchParams, setSeachParams] = useSearchParams();

    useEffect(() => {
        const searchQuery = searchParams.get('query');
        if(searchQuery) {
            const fetchMovies = async () => {
                const movies = await searchMovie(searchQuery);
                setMovies(movies);
            };
            fetchMovies();
        }
    }, [searchParams])

    const handleSearch = (event) => {
        event.preventDefault();
        setSeachParams({query})
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