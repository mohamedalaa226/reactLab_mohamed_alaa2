import { Container } from "react-bootstrap";
import NavBar1 from "../NavBar"
import { Outlet } from "react-router-dom";

const NavLayout = () => {
    return (
        <>
            <NavBar1 />
            <Container>
                <Outlet></Outlet>
            </Container>
        </>

    );
}
export default NavLayout