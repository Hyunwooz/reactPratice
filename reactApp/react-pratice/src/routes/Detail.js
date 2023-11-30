import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div key={movie.id}>
          <img src={movie.medium_cover_image} />
          <h2>{movie.title}</h2>
          <p>{movie.description_full}</p>
          <ul>
            {movie.genres.map((g, index) => (
              <li key={index}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
