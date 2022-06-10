import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  console.log(id);

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  console.log(movie);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <h1>
      Detail
      <Movie
        coverImg={movie.large_cover_image}
        summary={movie.description_full}
        id={movie.id}
        title={movie.title}
        genres={movie.genres}
      />
    </h1>
  );
}

export default Detail;
