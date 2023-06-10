// eslint-disable-next-line no-unused-vars
import { Card, Container } from "react-bootstrap"
const Card1=({Data,handelDetailsBtn})=>{
    return(
        <Card className='m-1'>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${Data.poster_path}`} />
        <Card.Body>
            <Card.Title>{Data.title}</Card.Title>
            <Card.Text>
                {Data.description}
            </Card.Text>
            <button type="button" className="btn btn-primary" onClick={()=>handelDetailsBtn(Data.id)}>Veiw Details</button>
        </Card.Body>
    </Card>
    )
}
export default Card1