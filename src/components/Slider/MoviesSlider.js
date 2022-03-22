

const MoviesSlider = (props) => {



  return (

      <div className='movie'>
              <img className="movie__img" src={"https://image.tmdb.org/t/p/w500" +props.movie.backdrop_path} alt={props.movie.path}/>
      </div>

  )
}

export default MoviesSlider;
