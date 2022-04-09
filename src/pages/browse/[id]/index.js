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
    const trailerStyle = {
        backgroundSize: "cover",
        backgroundPosition: "center center",

    }
    return (
        <div className="page__trailer" style={trailerStyle}>
            <CategoryTitle title={movie && movie.original_title} />
            <center>
                <iframe id="ytplayer" type="text/html" width="840" height="560"
                    src={`${trailerUrl}${video}?mute=1&autoplay=1&showinfo=0`}
                    frameborder="0" />
            </center>

        </div>
    );
};

export default Index;