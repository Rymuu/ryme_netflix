import { useState } from "react";
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "../Modal";

const Movie = ({ movie }) => {
  const [showToast, setShowToast] = useState(false);
  const router = useRouter();
  const notifyAdd = () => toast.success(`${movie?.title || movie?.name || movie?.original_title} a bien été ajouté dans ta watchlist !`);
  const notifyDelete = () => toast.success(`${movie?.title || movie?.name || movie?.original_title} a bien été retiré de ta watchlist !`);
  const [watchlist, setWatchlist] = useState(typeof window !== "undefined" ? JSON.parse(localStorage.getItem("mylist")) : []);
  const [infoModal, setInfoModal] = useState(false);

  const handleClickInfoModal = () => {
    setInfoModal(!infoModal);
  }

  const bannerStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",

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
    <div className="grid__item">

      <Modal
        bannerStyle={bannerStyle}
        movie={movie}
        popUp={(e) => handleClickInfoModal(e)}
        popUpStatut={infoModal} />

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
      <div className="grid__card">
        <div className="grid__img">
          {movie.backdrop_path ?
          (
            <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
          )
        :
        (
          null
        )
        }
          
        </div>
        <div className="grid__content">
          <PlayCircleFilledOutlinedIcon fontSize="large" className="hoverInfo__Icon" onClick={() => router.push(`/browse/${movie.id}`)} />
          <AddCircleOutlinedIcon fontSize="large" className="hoverInfo__Icon" onClick={() => addTowatchlist(movie)} />
          <RemoveCircleOutlinedIcon fontSize="large" className="hoverInfo__Icon" onClick={() => deleteMovie(movie)} />
          <ArrowDropDownCircleOutlinedIcon fontSize="large" className="hoverInfo__Icon__Right" onClick={() => handleClickInfoModal()} />
          <p className="hoverInfo__Green">Recommandé à 100%</p>

        </div>
      </div>
    </div>
  );
};
export default Movie;