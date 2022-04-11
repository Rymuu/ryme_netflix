import { useEffect, useState } from "react";
import movieService from "../services/movie.service";
import Movie from "../components/Slider/MovieCard";

const Index = (props) => {
    const [movies, setMovies] = useState();

    useEffect(() => {
        movieService.getSearchResult(props.search)
            .then((data) => {
                console.log(data)
                setMovies(data.results);
            })
            .catch(err => console.log(err))

    }, [props.search]);

    return (
        <div className="search__page">
            <div className="grid">
                {movies && movies.map((movie) => {
                    return <Movie key={movie.id} movie={movie} />;
                })}
            </div>
        </div>
    );
};

export default Index;
