import React from "react";
const Movie = ({movie}) => {
  return (
      <div className="grid__item">
    <div className="grid__img">
      <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
    </div>
    </div>
  );
};
export default Movie;