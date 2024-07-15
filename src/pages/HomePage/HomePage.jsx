import { useEffect, useState } from "react";
import { getTrending } from "../../api";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./HomePage.module.css"

export default function HomePage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchTrending = async () => {
            const movies = await getTrending();
            setMovies(movies);
        };
        fetchTrending();
    }, []);

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Trending Movies</h1>
            <MovieList movies={movies}/>
        </div>
    )
}