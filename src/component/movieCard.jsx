
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieCard=()=>{
    const [listItems, setListItem] = useState({});
    const param=useParams();
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=${'79066c32a7c98c1d2a26298c0b7b04d0'}`).then((res) => setListItem(res.data)).catch((err) => console.log(err));
    }, [param.id])
    console.log(listItems)
    
    return (
        <div class="card mb-3" >
            <img src={`https://image.tmdb.org/t/p/original${listItems.poster_path}`} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{listItems.original_title}</h5>
                    <p class="card-text">{listItems.overview}</p>
                    <p class="card-text"><small class="text-body-secondary">Release Date: {listItems.release_date}</small></p>
                </div>
        </div>
    )
}
export default MovieCard;