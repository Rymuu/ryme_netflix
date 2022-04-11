import React, { useEffect, useState } from "react";
import MoviesCard from "../../components/Slider/MovieCard";
import Filter from "../../components/Filter";
import movieService from "../../services/movie.service";
import withAuth from "../../HOC/withAuth";

const Index = () => {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    movieService.getMovies()
      .then((data) => {
        console.log(data.results);
        setPopular(data.results);
        setFiltered(data.results)
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="page__filter">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <div className="grid">
        {filtered.map((movie) => {
          return <MoviesCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div >
  );
};
export default withAuth(Index);