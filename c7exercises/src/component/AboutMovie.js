import { MovieContext } from "../App";
import React from "react";

export const AboutMovie = () => {
  const movieInfo = React.useContext(MovieContext);

  return(
    <div>
      <p>Rating: {movieInfo.rating}</p>
      <p>Genre: {movieInfo.genre}</p>
      <p>Plot: {movieInfo.plot}</p>
      <p>Release Date: {movieInfo.releaseDate}</p>
    </div>
  );
};