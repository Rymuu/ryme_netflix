import { useEffect, useState } from "react";
import movieService from "../services/movie.service";

const Home = () => {
  const [movie, setMovie] = useState();
  
    useEffect(() => {
      movieService.getMovie(5)
        .then((data) => {
          setMovie(data);
        })
        .catch(err => console.log(err))
        },[]);
   
  return (
    <div className="page__home">
      <h1>{movie && movie.poster_path}</h1> 
    </div>
  )
};

export default Home;
