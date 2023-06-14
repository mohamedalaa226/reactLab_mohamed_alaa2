import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line no-unused-vars
import { Card, Container } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { incearmentFavoriteMovie } from '../store/slices/FavoriteMovieSlice'
const Card1=({Data,handelDetailsBtn})=>{
    const FavoriteMovie=useSelector((state) => state.FavoriteMovieSlice.isClicked);
    const dispatch=useDispatch();
    return(
        <Card className='m-1'>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${Data.poster_path}`} />
        <Card.Body>
            <Card.Title>{Data.title}</Card.Title>
            <Card.Text>
                {Data.description}
            </Card.Text>
            <button type="button" className="btn btn-primary" onClick={()=>handelDetailsBtn(Data.id)}>Veiw Details</button>
            <span className='mx-3' style={{cursor:"pointer"}} onClick={()=>dispatch(incearmentFavoriteMovie(Data.id))}><FontAwesomeIcon icon={faStar} style={{color: "#808080",}} className={FavoriteMovie===true? 'text-warning':'text-dark'} /></span>
        </Card.Body>
    </Card>
    )
}
export default Card1