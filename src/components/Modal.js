import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Index = (props) => {
    const {bannerStyle, movie, popUp, popUpStatut} = props
  const router = useRouter();
 // const [movie, setMovie] = useState();
  const [valid, setValid] = useState(false);

  const dateParser = (date) =>{
    let newDate = new Date(date).toLocaleDateString('fr-FR', {
      year:"numeric",
      month:"long",
      day: "numeric",
      //hour:"numeric",
      //minute:"numeric",
      //second:"numeric"

    })
    return newDate;
}
  

 const addTowatchlist = (element) => {
    //On créé un nouvel object avec une nouvelle propriété quantity
    setValid(true);
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
        watchlistArray[indexOfExistingMovie].quantity += 1;
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
    <center>
            <button className="banner__button" onClick={() => addTowatchlist(movie)}>
              Watchlist
            </button>
        
        </center>    
       <div className="quickView__content">
          <h3 className="quickView__title">
          {movie?.title || movie?.name || movie?.original_title}
          </h3>
          <h3 style={{color : "rgba(120,120,120,3)"}}>
                Publié le : {dateParser(movie?.release_date)}
          </h3>
          <p style={{textAlign:"justify"}}>
            {movie?.overview}
          </p>
       </div>
      
       <button className="quickView__close" onClick={popUp}>
        close
       </button>
    </div>
</div>

    
      
  );
};

export default Index;