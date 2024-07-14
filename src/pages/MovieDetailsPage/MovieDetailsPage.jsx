import { useEffect, useState } from "react";
import { useParams, Link, useLocation, Outlet } from "react-router-dom";
import { getMovieDetails } from "../../api";

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
        <div>
            {movie && (
                <>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <button onClick={handleGoBack}>Go back</button>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
          <Outlet />
                </>
            )}
        </div>
    )
}