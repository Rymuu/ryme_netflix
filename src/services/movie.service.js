const apiUrl = "https://api.themoviedb.org/3";
const ApiKey = "0334767441bf14b805e9370bc9e5a7b4";

export default {
    getMovies(){
        return fetch(`${apiUrl}/discover/movie?api_key=${ApiKey}&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        .then((res) => res.json())
    },
    getMovie(id){
        return fetch(`${apiUrl}/movie/${id}?api_key=${ApiKey}&language=fr`)
        .then((res) => res.json())
    },

}