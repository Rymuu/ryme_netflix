import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import movieService from "../../../services/movie.service";
import CategoryTitle from "../../../components/CategoryTitle";

const Index = () => {
    const router = useRouter();
    const [video, setVideo] = useState();
    const [movie, setMovie] = useState();
    const id = router.query.id;
    const trailerUrl = "http://www.youtube.com/embed/"

    useEffect(() => {

        movieService.getVideos(id)
            .then((data) => {
                setVideo(data.results[0].key);
                console.log(data.results[0].key)
            })
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        movieService.getMovie(id)
            .then((movie) => {
                setMovie(movie);
                console.log(movie)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="trailer_page">
            <CategoryTitle title={movie && movie.original_title} />
            <iframe id="ytplayer" type="text/html" width="640" height="360"
                src={`${trailerUrl}${video}`}
                frameborder="0" />

        </div>
    );
};

export default Index;