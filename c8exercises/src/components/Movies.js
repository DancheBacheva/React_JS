import { Link } from "react-router-dom";

export const Movies = ( {movies} ) => {
  return(
    <div>
      <h1>Movies</h1>
      
        {movies.map((movie) => (
          <h2 key={movie.id}>
            <Link className='link' to={`/movies/${movie.id}`}>{movie.title}</Link>
          </h2>
        ))}
      
      <br />
      <br />
      <Link className='link' to="/movies/new" style={{color: 'rgb(0, 255, 160)'}}>New movie</Link>
    </div>
  )
}