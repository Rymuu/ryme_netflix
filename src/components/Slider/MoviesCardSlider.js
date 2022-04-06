
import { useEffect, useState } from "react";

const MoviesSlider = (props) => {

  const [infoModal, setInfoModal] = useState(false);

  const handleClickInfoModal = () => {
     setInfoModal(!infoModal);
   
 }

  return (
    <>
      <div className='movie'>        
        <img className="movie__img" src={"https://image.tmdb.org/t/p/w500" +props.movie.backdrop_path} alt={props.movie.path}/>
      </div>
    </>
  )
}

export default MoviesSlider;