
import { useEffect, useState } from "react";

const SimilarMoviesCard = (props) => {

  return (
    <>

      <div className='similar__movie'>
        <img className="similar__movie__img" src={"https://image.tmdb.org/t/p/w500" + props.movie.backdrop_path} alt={props.movie.path} />
      </div>

    </>
  )
}

export default SimilarMoviesCard