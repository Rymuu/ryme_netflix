import { useEffect, useState } from "react";
import movieService from "../../services/movie.service";
import "react-multi-carousel/lib/styles.css";
import Banner from "../../components/Banner";
import Slider from "../../components/Slider/Slider";


const Index = () => {
  const [video, setVideo] = useState();
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState();
  const ytbURL = "https://www.youtube.com/embed";

    useEffect(() => {
      movieService.getMovies()
        .then((data) => {
          setMovies(data.results);
          setLoading(true)
        })
        .catch(err => console.log(err))
        },[loading]);  

  return (
    <>
    <div className="page__browse">
      <Banner/>
    {movies &&
      <Slider/>}
      
    </div>
    </>
  )
};

export default Index;
