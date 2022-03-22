import Link from "next/link";

const MoviesCard = (props) => {
    const dateParser = (date) =>{
        let newDate = new Date(date).toLocaleDateString('fr-FR', {
          year:"numeric",
          month:"long",
          day: "numeric",
    
    
        })
        return newDate;
    
      }
      return(
      <div className="product__card">
             <div className="product__img">
               <img src={"https://image.tmdb.org/t/p/w500" +props.movie.backdrop_path} alt={props.movie.path}/>
              </div>
              <div className="product__data">
                <h2 style={{color : 'white'}}>{props.movie.title}</h2>
                <center><h4 style={{color : 'grey'}}>Publié le : {dateParser(props.movie.release_date)}</h4></center>
                <center><p>
                  <Link href={`/movie/${props.movie.id}`}>
                  {/* <Link href={'/shop/' + props.product.id} */}
                    <a style={{textDecoration :'none',color:'red'}}>
                      Voir le film
                    </a>
                  </Link>
                </p></center>

              </div>
            </div>
      );
}
export default MoviesCard;