const apiUrl = "https://api.themoviedb.org/3";
const ApiKey = "0334767441bf14b805e9370bc9e5a7b4";
const endpoints = {
    originals: "/discover/tv",
    trending: "/trending/movie/week",
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
    search: "/search/movie",
};

export default {
    getMovies(){
        return fetch(`${apiUrl}/discover/movie?api_key=${ApiKey}&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=3&with_watch_monetization_types=flatrate`)
        .then((res) => res.json())
    },
    getMovie(id){
        return fetch(`${apiUrl}/movie/${id}?api_key=${ApiKey}&language=fr`)
        .then((res) => res.json())
    },
    getVideos(id){
        return fetch(`${apiUrl}/movie/${id}/videos?api_key=${ApiKey}`)
        .then((res) => res.json())
    },
    getOriginals(){
        return fetch(`${apiUrl}${endpoints.originals}?api_key=${ApiKey}&language=fr&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
        .then((res) => res.json())
    },
    getTrending(){
        return fetch(`${apiUrl}${endpoints.trending}?api_key=${ApiKey}&language=fr`)
        .then((res) => res.json())
    },  
    getPopular(){
        return fetch(`${apiUrl}${endpoints.popular}?api_key=${ApiKey}&language=fr&page=1`)
        .then((res) => res.json())
    },
    getTopRated(){
        return fetch(`${apiUrl}${endpoints.top_rated}?api_key=${ApiKey}&language=fr&page=1`)
        .then((res) => res.json())
    },
    getUpcoming(){
        return fetch(`${apiUrl}${endpoints.upcoming}?api_key=${ApiKey}&language=fr&page=1`)
        .then((res) => res.json())
    },
    getSearchResult(searchQuery){
        return fetch(`${apiUrl}${endpoints.search}?api_key=${ApiKey}&language=fr&query=${searchQuery}&page=1&include_adult=false`)
        .then((res) => res.json())
    }


}