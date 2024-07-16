import { useEffect, useRef, useState } from "react";
import { useParams, Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../../api";
import styles from "./MovieDetailsPage.module.css"

export default function MovieDetailsPage() {
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const from = location.state?.from || '/movies';
    const navigate = useNavigate();
    const prevLocationRef = useRef(location.state);

    useEffect(() => {
        const fetchDetails = async () => {
            const movie = await getMovieDetails(movieId);
            setMovie(movie);
        }
        fetchDetails();
    }, [movieId])

    const handleGoBack = () => {
        navigate(prevLocationRef.current?.from || '/')
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
                    <Link to="cast" state={{from}}>Cast</Link>
                    <Link to="reviews" state={{from}}>Reviews</Link>
                </div>
          
                <Outlet />
                </>
            )}
        </div>
    )
}