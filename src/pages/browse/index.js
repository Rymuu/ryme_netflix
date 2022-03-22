import { useEffect, useState } from "react";
import MoviesSlider from "../../components/Slider/MoviesSlider";
import movieService from "../../services/movie.service";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CategoryTitle from "../../components/CategoryTitle";

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

    useEffect(() => {
      movieService.getVideos(550)
        .then((data) => {
          setVideo(data.results[0].key);
          setLoading(true)
          console.log(data.results[0].key);
        })
        .catch(err => console.log(err))
        },[loading]);

        const responsive = {
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 6 // optional, default to 1.
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5,
            slidesToSlide: 5 // optional, default to 1.
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
          }};
   
        

  return (
    <>
    <div className="page__browse">
      <iframe width="420" height="315"
        src={"https://www.youtube.com/embed/" + video + "?autoplay=1&mute=1&controls=0&&showinfo=0&loop=1"}>
      </iframe>
      <CategoryTitle title = "Tendances"/>
    {movies &&
      <Carousel
      responsive={responsive}
      autoPlay={false}
      shouldResetAutoplay={false}
      infinite={true}
      className="container"
      >
        {movies.map((movie) => {return (<MoviesSlider movie={movie} key={movie.id}/>)
          }) }
      </Carousel>}
      
    </div>
    </>
  )
};

export default Index;
