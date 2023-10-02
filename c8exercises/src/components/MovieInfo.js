import { useParams } from "react-router-dom";

export const MovieInfo = ( {movies} ) => {
  
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === Number(id));

  return (
    <div>
      <h1>{movie.title}</h1>
      <img className="movieImg" src={movie.image} alt="movieImage"/>
      <h3>{movie.genre}</h3>
      <h3>{movie.rating}</h3>
    </div>
  );
};
