import { useEffect, useState } from "react";
import MoviesCardSlider from "./MoviesCardSlider";
import movieService from "../../services/movie.service";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CategoryTitle from "../../components/CategoryTitle";


const Index = (props) => {

        const responsive = {
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6.5,
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
    <div className="movie__slider">
      <CategoryTitle title = {props.title}/>
    {props.movies &&
      <Carousel
      responsive={responsive}
      autoPlay={false}
      shouldResetAutoplay={false}
      infinite={true}
      className="container"
      >
        {props.movies.map((movie) => {return (<MoviesCardSlider movie={movie} key={movie.id}/>)
          }) }
      </Carousel>}
      
    </div>
    </>
  )
};

export default Index;
