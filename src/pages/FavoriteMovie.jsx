import { Container } from "react-bootstrap";
import {  useSelector } from "react-redux";
// import MovieCard from "../component/movieCard";
// import FavoirteCard from "../component/FavoriteCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Favorite=()=>{
    const MovieValue=useSelector((state) => state.FavoriteMovieSlice.value)
    const [listItems, setListItem] = useState({});

    // const dispatch=useDispatch()
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${MovieValue}?api_key=${'79066c32a7c98c1d2a26298c0b7b04d0'}`).then((res) => setListItem(res.data)).catch((err) => console.log(err));
    }, [MovieValue])

    return(
        <Container>
        <div className="row my-5">
            <div className="col-4" >
            <div class="card mb-3" >
            <img src={`https://image.tmdb.org/t/p/original${listItems.poster_path}`} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{listItems.original_title}</h5>
                    <p class="card-text">{listItems.overview}</p>
                    <p class="card-text"><small class="text-body-secondary">Release Date: {listItems.release_date}</small></p>
                </div>
        </div>
            </div>
        </div>
    </Container>)
}
export default Favorite;