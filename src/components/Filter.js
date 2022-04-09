import React, { useEffect } from "react";
import CategoryTitle from "./CategoryTitle";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const Filter = ({ popular, setFiltered, activeGenre, setActiveGenre }) => {


  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular); //Checks- don't do anything, just return all
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre),
    );
    setFiltered(filtered);
  }, [activeGenre]);
  return (
    <div className="dropdown">
      <CategoryTitle title="Films" />
      <button className="dropbtn">Genres<ArrowDropDownOutlinedIcon className="btn__icon"/></button>
      <div className="dropdown-content">
        <a onClick={() => setActiveGenre(0)}
          className={activeGenre === 0 ? "active" : ""}>
          Tout
        </a>
        <a onClick={() => setActiveGenre(35)}
          className={activeGenre === 35 ? "active" : ""}>
          Comédie
        </a>
        <a onClick={() => setActiveGenre(28)}
          className={activeGenre === 28 ? "active" : ""}>
          Action
        </a>
        <a onClick={() => setActiveGenre(12)}
          className={activeGenre === 12 ? "active" : ""}>
          Aventure
        </a>
        <a onClick={() => setActiveGenre(16)}
          className={activeGenre === 16 ? "active" : ""}>
          Animation
        </a>
        <a onClick={() => setActiveGenre(80)}
          className={activeGenre === 80 ? "active" : ""}>
          Crime
        </a>
        <a onClick={() => setActiveGenre(99)}
          className={activeGenre === 99 ? "active" : ""}>
          Documentaire
        </a>
        <a onClick={() => setActiveGenre(18)}
          className={activeGenre === 18 ? "active" : ""}>
          Drame
        </a>
        <a onClick={() => setActiveGenre(10751)}
          className={activeGenre === 10751 ? "active" : ""}>
          Famille
        </a>
        <a onClick={() => setActiveGenre(14)}
          className={activeGenre === 14 ? "active" : ""}>
          Fantastique
        </a>
        <a onClick={() => setActiveGenre(36)}
          className={activeGenre === 36 ? "active" : ""}>
          Histoire
        </a>
        <a onClick={() => setActiveGenre(27)}
          className={activeGenre === 27 ? "active" : ""}>
          Horreur
        </a>
        <a onClick={() => setActiveGenre(10402)}
          className={activeGenre === 10402 ? "active" : ""}>
          Musique
        </a>
        <a onClick={() => setActiveGenre(9648)}
          className={activeGenre === 9648 ? "active" : ""}>
          Mystère
        </a>
        <a onClick={() => setActiveGenre(10749)}
          className={activeGenre === 10749 ? "active" : ""}>
          Romance
        </a>
        <a onClick={() => setActiveGenre(878)}
          className={activeGenre === 878 ? "active" : ""}>
          Science-Fiction
        </a>
        <a onClick={() => setActiveGenre(10770)}
          className={activeGenre === 10770 ? "active" : ""}>
          Téléfilm
        </a>
        <a onClick={() => setActiveGenre(53)}
          className={activeGenre === 53 ? "active" : ""}>
          Thriller
        </a>
        <a onClick={() => setActiveGenre(10752)}
          className={activeGenre === 10752 ? "active" : ""}>
          Guerre
        </a>
        <a onClick={() => setActiveGenre(37)}
          className={activeGenre === 37 ? "active" : ""}>
          Western
        </a>
      </div>
    </div>
  );
};
export default Filter;