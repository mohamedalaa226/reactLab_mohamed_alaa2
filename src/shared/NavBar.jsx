import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { LanguageContext } from '../context/context';
const NavBar1 = () => {
    const MovieCounter=useSelector((state) => state.FavoriteMovieSlice.FavoriteMovieCounter)
    const {lang , setLang}=useContext(LanguageContext)

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
                <Link to='/FavoriteMovie' className='nav-link mx-2 text-light'>FavoriteMovie <span className='mx-1'><FontAwesomeIcon icon={faStar} style={{color: "#fad900",}} /></span>: {MovieCounter}</Link>
                <Link to='/Register' className='nav-link mx-2 text-light'>Register</Link>
                <Link to='/Login' className='nav-link mx-2 text-light'>Login</Link>
                <button className='btn btn-primary' onClick={()=>setLang(lang === 'ar' ? 'en' : 'ar')}>{lang}</button>
            </Container>
        </Navbar>)
}
export default NavBar1;