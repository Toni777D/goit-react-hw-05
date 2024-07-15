import { Link } from "react-router-dom";
import styles from "./MovieList.module.css"

export default function MovieList({movies}) {
    return (
<div className={styles.wrap}>
<ul className={styles.list}>
    {movies.map(movie => (
      <li key={movie.id} className={styles.item}>
        <Link to={`/movies/${movie.id}`}>
        <img className={styles.img} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
        <p className={styles.title}>{movie.title}</p>
        </Link>
      </li>
    ))}
  </ul>
</div>
    )
}