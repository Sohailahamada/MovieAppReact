import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
function SingleMovie(){

    const param = useParams()
    //console.log(param.id)
    
    const[myMovie, setMyMovie] = useState({})

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=3f5c2ea4219c807f0347be45ed2ee2f9`)
        .then((movie) => setMyMovie(movie.data))
        .catch((err) => console.log(err))
    }, [])


    return(
        <>
        <MovieCard img={`https://image.tmdb.org/t/p/w500${myMovie.poster_path}?api_key=3f5c2ea4219c807f0347be45ed2ee2f9`} title={myMovie.original_title} desc={myMovie.overview} date={myMovie.release_date}/>
        </>
    )



}
export default SingleMovie;