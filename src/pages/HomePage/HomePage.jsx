import { useEffect, useState } from "react";
import { getTrending } from "../../api";
import MovieList from '../../components/MovieList/MovieList'


export default function HomePage() {

    const [movies, setMovies] = useState([]);
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        // setLoading(true)
        const fetchTrending = async () => {
            const movies = await getTrending();
            setMovies(movies);
            // try {
            //     const data = await getTrending();
            // setMovies(data);
            // } catch (error) {
            //     setError(error.message);
            // }
            // finally{
            //     setLoading(false)
            // }
            
        }
        fetchTrending();
    }, []);
    return (

        <div>
            <h1>Trending Movies</h1>
            <MovieList movies={movies}/>
        </div>
    )
}