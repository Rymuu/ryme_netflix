import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Index = (props) => {
  const notifyAdd = () => toast(`${movie.original_title} a bien été ajouté dans ta watchlist !`);
  const notifyDelete = () => toast(`${movie.original_title} a bien été retiré de ta watchlist !`);
  const { bannerStyle, movie, popUp, popUpStatut } = props
  const router = useRouter();
  // const [movie, setMovie] = useState();
  const [valid, setValid] = useState(false);
  const [watchlist, setWatchlist] = useState(typeof window !== "undefined" ? JSON.parse(localStorage.getItem("mylist")) : []);

  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString('fr-FR', {
      year: "numeric",
      month: "long",
      day: "numeric",
      //hour:"numeric",
      //minute:"numeric",
      //second:"numeric"

    })
    return newDate;
  }

  const deleteMovie = (movie) => {
    notifyDelete();
    const filteredList = watchlist.filter((item) => item.id !== movie.id);
    localStorage.setItem("mylist", JSON.stringify(filteredList));
    setWatchlist(filteredList);
  };
  const addTowatchlist = (element) => {
    //On créé un nouvel object avec une nouvelle propriété quantity
    notifyAdd();
    let movieToInsert = {
      id: element.id,
      title: element.title,
      backdrop_path: element.backdrop_path,
      overview: element.overview,
      quantity: 1
    };




    const watchlistArray = [];

    //Si j'ai déjà un ou des produits dans mon localstorage
    if (localStorage.getItem("mylist")) {

      const localStorageMyList = JSON.parse(localStorage.getItem("mylist"));
      localStorageMyList.forEach((movie) => {
        watchlistArray.push(movie);
      });

      const indexOfExistingMovie = watchlistArray.findIndex((el) => el.id === element.id);

      if (indexOfExistingMovie !== -1) {
      }
      else {
        watchlistArray.push(movieToInsert);
      }
      localStorage.setItem("mylist", JSON.stringify(watchlistArray));
    }
    //Si localstorage vide
    else {
      watchlistArray.push(movieToInsert);
      localStorage.setItem("mylist", JSON.stringify(watchlistArray));
    }



  };

  return (
    <div className={`quickView ${popUpStatut && "open"}`} >
      <div className="quickView__banner" style={bannerStyle} >

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <div className="modal__buttons">
          <button className="banner__button" onClick={() => { router.push(`/browse/${movie.id}`) }}>
            <PlayArrowRoundedIcon /> Lecture
          </button>
          <a className="quickView__add" onClick={() => addTowatchlist(movie)}>
            <AddCircleRoundedIcon fontSize="large" />
          </a>
          <a className="quickView__add" onClick={() => deleteMovie(movie)}>
            <RemoveCircleOutlineRoundedIcon fontSize="large" />
          </a>
        </div>

        <div className="quickView__content">
          <h3 className="quickView__title">
            {movie?.title || movie?.name || movie?.original_title}
          </h3>
          <h3 style={{ color: "rgba(120,120,120,3)" }}>
            Publié le : {dateParser(movie?.release_date)}
          </h3>
          <p style={{ textAlign: "justify" }}>
            {movie?.overview}
          </p>
        </div>
        <a className="quickView__close" onClick={popUp}>
          <CloseRoundedIcon />
        </a>
      </div>
    </div>



  );
};

export default Index;