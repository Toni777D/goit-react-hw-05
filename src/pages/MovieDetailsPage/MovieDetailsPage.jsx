import { useEffect, useState } from "react";
import { useParams, Link, useLocation, Outlet } from "react-router-dom";
import { getMovieDetails } from "../../api";
import styles from "./MovieDetailsPage.module.css"

export default function MovieDetailsPage() {
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const fetchDetails = async () => {
            const movie = await getMovieDetails(movieId);
            setMovie(movie);
        }
        fetchDetails();
    }, [movieId])

    const handleGoBack = () => {
        const prevLocation = location.state?.from || '/movies';
        window.history.back();
    }
    return (
        <div className={styles.wrap}>
            {movie && (
                <>
                <button className={styles.btn} onClick={handleGoBack}>Go back</button>

                <div className={styles.movie}>
                     <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                     <div className={styles.description}>
                        <h1 className={styles.title}>{movie.title} ({new Date(movie.release_date).getFullYear()})</h1>
                
                        <p className={styles.overview}>Overview</p>
                        <p className={styles.text}>{movie.overview}</p>
                     </div>
                </div>
                
                <div className={styles.link}>
                <Link to="cast">Cast</Link>
                <Link to="reviews">Reviews</Link>
                </div>
          
          <Outlet />
                </>
            )}
        </div>
    )
}