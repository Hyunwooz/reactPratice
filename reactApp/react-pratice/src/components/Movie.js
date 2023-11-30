import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ movie }) {
  return (
    <div className={styles.movie}>
      <img
        src={movie.medium_cover_image}
        alt={movie.title}
        className={styles.movie__img}
      />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{movie.year}</h3>
        <p>
          {movie.description_full.length > 235
            ? `${movie.description_full.slice(0, 235)}...`
            : movie.description_full}
        </p>
        <ul className={styles.movie__genres}>
          {movie.genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
