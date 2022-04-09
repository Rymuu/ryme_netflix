import { useEffect, useState } from "react";
import movieService from "../../services/movie.service";
import "react-multi-carousel/lib/styles.css";
import Banner from "../../components/Banner";
import Slider from "../../components/Slider/Slider";
import withAuth from "../../HOC/withAuth";


const Index = () => {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState();
  const [popular, setPopular] = useState();
  const [trending, setTrending] = useState();
  const [topRated, setTopRated] = useState();

  useEffect(() => {
    movieService.getMovies()
      .then((data) => {
        setMovies(data.results);
        setLoading(true)
      })
      .catch(err => console.log(err))
 
    movieService.getTrending()
      .then((data) => {
        setTrending(data.results);
        setLoading(true)
      })
      .catch(err => console.log(err))

    movieService.getPopular()
      .then((data) => {
        setPopular(data.results);
        console.log(data.results)
      })
      .catch(err => console.log(err))


 
    movieService.getTopRated()
      .then((data) => {
        setTopRated(data.results);
        setLoading(true)
      })
      .catch(err => console.log(err))
  }, [loading]);

  return (
    <>
      <div className="page__browse">
        <Banner />
        {trending &&
          <Slider
            movies={trending}
            title="Tendances" />}
        {popular &&
          <Slider
            movies={popular}
            title="Populaires sur Netflix" />}
        {topRated &&
          <Slider
            movies={topRated}
            title="Les mieux notés" />}
        {movies &&
          <Slider
            movies={movies}
            title="Vous aimerez aussi" />}
      </div>
    </>
  )
};

export default withAuth(Index);
