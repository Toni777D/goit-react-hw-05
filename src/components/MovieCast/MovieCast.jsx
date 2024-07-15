import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../api";
import styles from "./MovieCast.module.css"

export default function MovieCast() {
  const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchCredits = async () => {
            const cast = await getMovieCredits(movieId);
            setCast(cast)
        };
        fetchCredits();
    }, [movieId]);

    return (
<div>
      <h2>Cast</h2>
      <ul className={styles.list}>
        {cast.map(actor => (
          <li className={styles.item

          } key={actor.id}>
            
            <p className={styles.name}>{actor.name}</p>
            <img className={styles.img}
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} 
              alt={actor.name} 
            />
           </li>
        ))}
      </ul>
    </div>

    )
}