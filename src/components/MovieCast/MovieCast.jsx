import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from '../../api'

export default function MovieCast() {
  const {movieId} = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchCredits = async () => {
            const cast = await getMovieCredits(movieId);
            setCast(cast)
        }
        fetchCredits();
    }, [movieId])

    return (
<div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>

    )
}