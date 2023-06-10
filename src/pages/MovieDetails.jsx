// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap"
import MovieCard from "../component/movieCard";

const Details = () => {
    // const paramsID = useParams();

    return (
        <Container>
            <div className="row my-5">
                <div className="col-4">
                    <MovieCard  />
                </div>
            </div>
        </Container>
    )
}
export default Details;