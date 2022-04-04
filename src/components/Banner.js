import React from 'react'
import { useState,useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import movieService from '../services/movie.service'
import Modal from './Modal';



function Banner() {
  
  const [movie, setMovie] = useState([]);
  const [infoModal, setInfoModal] = useState(false);

  const handleClickInfoModal = () => {
     setInfoModal(!infoModal);
   }  
  useEffect( ()=>{
    movieService.getTrending()
    .then((data) => {
      console.log(data)
      setMovie(
          data.results[
            Math.floor(Math.random() * data.results.length-1)
          ]);
      
    })
  .catch(err=>console.log(err))

   
  }, []);

  function truncateText(string, n ) {
    return string?.length> n? 
           string.substr(0, n-1) + "..."
           :
           "No description";

  }

  const bannerStyle = {
     backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
     backgroundSize: "cover",
     backgroundPosition: "center center",

  }

  console.log(infoModal)

  return (
    <header className='banner' style={bannerStyle} > 
       
        <div className="banner__content">

          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_title}
          </h1>
         
          <p className="banner__description">
            {truncateText(movie?.overview, 100)}
          </p>
          <div className="banner__buttons">
            <button  className="banner__button ">
                <PlayArrowIcon/> Lecture
            </button>
            <button className="banner__button" onClick={handleClickInfoModal}>
                <HelpOutlineIcon/> Plus d'infos
            </button>
          </div>

        </div>

        <Modal 
           bannerStyle={bannerStyle}
           movie={movie}
           popUp={(e) => handleClickInfoModal(e)}
           popUpStatut={infoModal}/>
        
    </header>
  )
}

export default Banner;