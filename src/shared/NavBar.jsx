
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavBar1 = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand  className=' '></Navbar.Brand>
                <Link to='/'  className='navbar-brand nav-link me-2'>ProudctsStore</Link>
                <Nav className="me-auto">
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to='/About Us' className='nav-link'>About Us</Link>
                    <Link to='/Contact Us' className='nav-link'>Contact Us</Link>
                </Nav>
                <Link to='/Register' className='nav-link mx-2 text-light'>Register</Link>
                <Link to='/Login' className='nav-link mx-2 text-light'>Login</Link>
            </Container>
        </Navbar>)
}
export default NavBar1;