import { useEffect, useState } from "react"
import {  Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card1 from "./Card";
const Cardlist = () => {
    const [listItems, setListItem] = useState([]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${'79066c32a7c98c1d2a26298c0b7b04d0'}`).then((res) => setListItem(res.data.results)).catch((err) => console.log(err));
    }, [])
    const Navigate = useNavigate('');

    const handelDetailsBtn =(id) => {
        Navigate(`/Movie-Details/${id}`)
    }
    return (
        <Container className="my-5">
            <div className="row">
                {listItems.map((item,index) => {
                    return (
                        <div className="col-4" key={index}>
                            <Card1 Data={item} handelDetailsBtn={handelDetailsBtn} />
                            
                        </div>
                    )

                })}
            </div>
        </Container>
    )
}
export default Cardlist;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const MovieCards = () => {
//     const [movies, setMovies] = useState([]);
//         useEffect(() => {
//             axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${'79066c32a7c98c1d2a26298c0b7b04d0'}`).then((res) => setMovies(res.data.results)).catch((err) => console.log(err));
    
//         }, [])

//     // useEffect(() => {
//     //     const fetchMovies = async () => {
//     //         try {
//     //             const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${'79066c32a7c98c1d2a26298c0b7b04d0'}`);
//     //             setMovies(response.data.results);
//     //         } catch (error) {
//     //             console.error('Failed to fetch movies:', error);
//     //         }
//     //     };

//     //     fetchMovies();
//     // }, []);

//     return (
//         <div className="movie-cards">
//             {movies.map((movie, index) => (
//                 <div key={index} className="card">
//                     <img
//                         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                         alt={movie.title}
//                         className="card-img-top"
//                     />
//                     <div className="card-body">
//                         <h5 className="card-title">{movie.title}</h5>
//                         <p className="card-text">Release Date: {movie.release_date}</p>
//                         <p className="card-text">Rating: {movie.vote_average}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default MovieCards;