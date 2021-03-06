import React from 'react'
import { useState, useEffect } from 'react';
import movieService from '../services/movie.service'
import Modal from './Modal';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useRouter } from 'next/router';

function Banner() {

  const [movie, setMovie] = useState([]);
  const [infoModal, setInfoModal] = useState(false);
  const router = useRouter();

  const handleClickInfoModal = () => {
    setInfoModal(!infoModal);
  }

  useEffect(() => {
    movieService.getTrending()
      .then((data) => {
        console.log(data)
        setMovie(
          data.results[
          Math.floor(Math.random() * data.results.length - 1)
          ]);

      })
      .catch(err => console.log(err))


  }, []);

  function truncateText(string, n) {
    return string?.length > n ?
      string.substr(0, n - 1) + "..."
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
          {movie && movie?.title || movie?.name || movie?.original_title}
        </h1>
        {movie &&
          <p className="banner__description">
            {truncateText(movie?.overview, 150)}
          </p>
        }
        <div className="banner__buttons">
          <button className="banner__button__play" onClick={() => { router.push(`/browse/${movie.id}`) }}>
            <PlayArrowIcon />Lecture
          </button>
          <button className="banner__button__info" onClick={handleClickInfoModal}>
            <InfoOutlinedIcon />Plus d'infos
          </button>
        </div>

      </div>
      {movie &&
        <Modal
          bannerStyle={bannerStyle}
          movie={movie}
          popUp={(e) => handleClickInfoModal(e)}
          popUpStatut={infoModal} />
      }
    </header>
  )
}

export default Banner;