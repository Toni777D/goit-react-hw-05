import { Link } from "react-router-dom";

export default function MovieList({movies}) {
    return (
<div>
<ul>
    {movies.map(movie => (
      <li key={movie.id}>
        <Link to={{
          pathname: `/movies/${movie.id}`,
          state: { from: window.location.pathname }
        }}>{movie.title}</Link>
      </li>
    ))}
  </ul>
</div>
    )
}