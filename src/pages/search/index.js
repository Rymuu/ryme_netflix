import { useEffect, useState } from "react";
import CategoryTitle from "../../components/CategoryTitle";
import movieService from "../../services/movie.service";
import withAuth from "../../HOC/withAuth";
import Movie from "../../components/Slider/MovieCard";
import Search from "../../components/Search"

const Index = () => {
    const [movies, setMovies] = useState();
    const [search, setSearch] = useState("a");


    const submitSearch = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        movieService.getSearchResult(search)
            .then((data) => {
                console.log(data)
                setMovies(data.results);
            })
            .catch(err => console.log(err))

    }, [search]);

    const onSuggestHandler = (search) => {
        setSearch(search)
    }

    return (
        <div className="search__page">
            <center>
                <form className="form-search" onSubmit={(e) => submitSearch(e)}>
                    <input
                        type="text"
                        placeholder="Chercher un film"
                        id="search"
                        size="50"
                        className="input__search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <input className="button__search" onClick={() => onSuggestHandler(search)} type="submit" value="Rechercher" />
                </form>
            </center>
            <Search search={search}/>
        </div>
    );
};

export default withAuth(Index);
